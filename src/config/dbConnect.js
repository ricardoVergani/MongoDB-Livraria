import mongoose from "mongoose";

mongoose.connect("mongodb+srv://admin:admin123@cluster0.qo55ais.mongodb.net/livrariaa?retryWrites=true&w=majority");

let db = mongoose.connection;

export default db;