import express from 'express'
import dotenv from 'dotenv';
import connectToMongoDB from './src/database/connectDb.js';

const app=express(); 
dotenv.config();
const PORT=process.env.PORT;

app.listen(PORT,async()=>{
    connectToMongoDB();
    console.log(`running on port : ${PORT}`);
})