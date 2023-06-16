import 'reflect-metadata';
import { DataSource } from 'typeorm';

require('dotenv').config();

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    synchronize: true, // make it true to synchronize every Entity with our database
    logging: false, //to show execute query in console
    entities: [],
    migrations: [],
    subscribers: [],
});
