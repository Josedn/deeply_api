import Logger, { LogLevel } from "../../misc/Logger";
import { Request, Response, NextFunction } from "express";
import { getRandomToken } from "../../misc/Utils";
import ShortUrlController from "../../database/controllers/ShortUrlController";

const writeLine = Logger.generateLogger("UrlShortenerController");
const writeLineWithRequest = (line: String, req: Request) => {
    const address = req.connection.address() as any;
    if (address?.address != null) {
        writeLine(line + " from " + address.address, LogLevel.Debug);
    }
};

export default class UrlShortenerController {
    static async create(req: Request, res: Response, next: NextFunction) {
        writeLineWithRequest("Requested create", req);
        //const { token } = req.headers;
        const { source } = req.body;

        if (source == null || source.length < 0) {
            res.status(400).json({});
            return;
        }

        const slug = getRandomToken();
        const response = await ShortUrlController.create(slug, source);
        console.log(response);
        res.json(response);
    }

    static async retrieve(req: Request, res: Response, next: NextFunction) {
        writeLineWithRequest("Requested retrieve", req);
        const { slug } = req.query as any;

        if (slug == null || slug.length < 0) {
            res.status(400).json({});
            return;
        }

        const response = await ShortUrlController.retrieve(slug);
        console.log(response);
        res.json(response);
    }
}

