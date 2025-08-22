import { MongoClient } from 'mongodb';
import 'dotenv/config.js';
import mongoose from 'mongoose';

class dbClient {
    constructor() {
        this.conectarDB();
    }

    async conectarDB() {
        const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.DB_PASSWORD}@${process.env.SERVER_DB}/${process.env.DB_NAME}?retryWrites=true&w=majority`
        await mongoose.connect(queryString);
        console.log('Conexion a la base de datos hecha');
    }

    async cerrarDB() {
        try {
            await mongoose.disconnect();
            console.log('Conexion a la base de datos cerrada');
        } catch (error) {
            console.log(error);
        }
    }

}

export default new dbClient();