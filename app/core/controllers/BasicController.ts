import Logger, { LogLevel } from "../../misc/Logger";
import { Request, Response, NextFunction } from "express";

const writeLine = Logger.generateLogger("BasicController");

export default class BasicController {
    static getIndex(req: Request, res: Response, next: NextFunction): void {
        writeLine("Requested index", LogLevel.Debug);
        res.json({});
    }
}

