import mysql, { Connection, Query } from 'mysql';

export default class DatabaseManager {
    connection: Connection;

    constructor(host: string, port: number, user: string, password: string, database: string) {
        this.connection = mysql.createConnection({
            host,
            user,
            password,
            database,
            port
        });
    }

    initialize = (): Promise<void> => {
        return new Promise((resolve, reject) => {
            this.connection.connect(err => {
                if (err) {
                    reject(new Error('error connecting to mysql server: ' + err.message));
                    return;
                }
                resolve();
            });
        });
    }

    doQuery = (query: string, params: string[]): Promise<any> => {
        return new Promise<any>((resolve, reject) => {
            this.connection.query(query, params, (error, results, fields) => {
                if (error)
                    reject(error);
                resolve(results);
            });
        });
    }

    dispose = () => {
        if (this.connection != null) {
            this.connection.end();
        }
    }
}