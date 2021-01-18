import { mongo } from "mongoose";
import DatabaseManager from "../database/DatabaseManager";
import ConfigManager from "../misc/ConfigManager";
import { ConfigKeys } from "../misc/Constants";
import ApiService from "./ApiService";
import RouteManager from "./controllers/RouteManager";

export default class Core {
    private apiService: ApiService;
    private routeManager: RouteManager;
    private databaseManager: DatabaseManager;

    constructor(configManager: ConfigManager) {
        const apiPort = configManager.getInt(ConfigKeys.API_PORT, 1232);
        const mongoUri = configManager.getString(ConfigKeys.MONGO_URI, "");

        this.apiService = new ApiService(apiPort);
        this.databaseManager = new DatabaseManager(mongoUri);
        this.routeManager = new RouteManager();
    }

    async initialize() {
        await this.databaseManager.initialize();
        await this.apiService.initialize();
        this.routeManager.initialize(this.apiService.app);
    }
}