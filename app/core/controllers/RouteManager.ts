import Express from "express";
import BasicController from "./BasicController";
import UrlShortenerController from "./UrlShortenerController";
//import Logger, { LogLevel } from "../../misc/Logger";

//const writeLine = Logger.generateLogger("RouteManager");

export default class RouteManager {
    initialize(app: Express.Application): void {
        app.get("/", BasicController.getIndex);
        app.post("/create", UrlShortenerController.create);
        app.get("/retrieve", UrlShortenerController.retrieve);
    }
}