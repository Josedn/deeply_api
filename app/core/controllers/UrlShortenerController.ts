import Logger, { LogLevel } from "../../misc/Logger";
import { Request, Response, NextFunction } from "express";

const writeLine = Logger.generateLogger("UrlShortenerController");
const writeLineWithRequest = (line: String, req: Request) => {
    const address = req.connection.address() as any;
    if (address?.address != null) {
        writeLine(line + " from " + address.address, LogLevel.Debug);
    }
};

export default class UrlShortenerController {
    static create(req: Request, res: Response, next: NextFunction): void {
        const { token } = req.headers;
        const { url } = req.body;
        writeLineWithRequest("Requested index", req);
        res.json({});
    }

    static retrieve(req: Request, res: Response, next: NextFunction): void {
        writeLineWithRequest("Requested index", req);
        res.json({});
    }
}

