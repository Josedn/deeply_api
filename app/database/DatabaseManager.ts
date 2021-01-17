import mongoose, { Mongoose } from "mongoose";
import Logger, { LogLevel } from "../misc/Logger";

const writeLine = Logger.generateLogger("DatabaseManager");

export default class DatabaseManager {
    private client?: Mongoose;

    constructor(private mongoUri: string) { }

    initialize(): Promise<void> {
        return new Promise((resolve, reject) => {
            mongoose.connect(this.mongoUri, {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }).then(mong => {
                this.client = mong;
                writeLine("Connected to database.", LogLevel.Verbose);
                resolve();
            }).catch(err => {
                reject(err);
            });
        });
    }
}