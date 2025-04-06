// require('dotenv').config({path: './.env'});

import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { DB_NAME } from './constants.js';
import connectDB from './db/index.js';

dotenv.config({ path: './.env' });





connectDB()













/*

import express from 'express';
const app = express();
//agar upr wali line m semi colon chhut gya to isliye agli line m laga diya hai
;(
   async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on('error', (err) => {
            console.error('MongoDB connection error:', err);
            throw err; // Rethrow the error to stop the server from starting
        });

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });

    } catch (error) {
        throw new Error('Failed to connect to MongoDB:', error);
    }
   }
)()

*/