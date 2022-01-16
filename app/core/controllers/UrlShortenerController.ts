import { Request, Response, NextFunction } from "express";
import { getRandomToken } from "../../misc/Utils";
import ShortUrlController from "../../database/controllers/ShortUrlController";
import { writeLineWithRequest } from "./BasicController";

export default class UrlShortenerController {
    static errorBody = {
        errorCode: -1,
        errorText: "Something went wrong",
    };

    static async create(req: Request, res: Response, next: NextFunction) {
        writeLineWithRequest("Requested create", req);
        //const { token } = req.headers;
        const { source } = req.body;

        if (source == null || source.length < 0) {
            res.status(400).json(this.errorBody);
            return;
        }

        const slug = getRandomToken();
        const response = await ShortUrlController.create(slug, source);
        console.log(response);
        res.json(response);
    }

    static async retrieve(req: Request, res: Response, next: NextFunction) {
        writeLineWithRequest("Requested retrieve", req);

        const { id: slug } = req.params as any;

        if (slug == null || slug.length < 0) {
            res.status(400).json(this.errorBody);
            return;
        }

        const response = await ShortUrlController.retrieve(slug);
        console.log(response);
        res.json(response);
    }
}

