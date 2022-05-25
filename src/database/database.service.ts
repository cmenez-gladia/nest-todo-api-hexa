import { Injectable } from '@nestjs/common';
const Knex = require('knex');

@Injectable()
export class DatabaseService {

    private _knexConnection: any;

    constructor() {

        this._knexConnection = new Knex ({
            client: 'postgres',
            connection: {
                host: process.env.DB_HOST,
                port: process.env.DB_PORT,
                user:  process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME,
            }

        });
    
    }

    
    public getInstance() : any {
        return this._knexConnection;
    }
    
}
