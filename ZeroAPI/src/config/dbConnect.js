import mongoose, { mongo } from "mongoose";

const db = async () => {
    mongoose.connect(process.env.DB_CONNECTION_STRING);
    return mongoose.connection;
} 

export default db;