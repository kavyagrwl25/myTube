import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
import dotenv from "dotenv";
dotenv.config();


const app = express();

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        app.on("error", (error) => {
            console.error("ERROR!...Connection was unsuccesful", error);
        });

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
            console.log("MongoDB connected successfully");
        })
        

    } catch (error) {
        console.error("ERROR!...Connection was unsuccesful", error);
        throw error;
    }
})();