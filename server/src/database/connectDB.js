import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const DB_URI=process.env.MONGO_URI;

if(!DB_URI){
    throw new Error('please add DB URI in .env')
}

 const connectToMongoDB=async()=>{
    try{
        await mongoose.connect(DB_URI);
        console.log('connected to DB');
    }catch(error){
        console.error('error connecting : ' ,error);
        process.exit(1);
    }
}

export default connectToMongoDB