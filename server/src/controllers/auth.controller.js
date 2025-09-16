import mongoose from "mongoose";
import jwt from 'jsonwebtoken'
import User from "../models/user.model.js";
import bcrypt from "bcryptjs"
import dotenv from 'dotenv'

dotenv.config();
const JWT_SECRET=process.env.JWT_SECRET;
const JWT_EXPIRES_IN=process
//here i will implement signup and signin functions

//signUp function

export default signUp=async(req,res,next)=>{
    const session=await mongoose.startSession();
    session.startTransaction();

    try{
        const {username,email,password,}=req.body;
        console.log(name,email,password);
        const existingUser=await User.findOne({email});
        if(existingUser){
            const error=new Error('user already exists');
            error.statusCode=409;
            throw error;
        }
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);
        const newUsers=await User.create([{name,email,password:hashedPassword}],{session});
        const token=jwt.sign({userId:newUsers[0]._id},JWT_SECRET,{expiresIn:JWT_EXPIRES_IN});

        session.commitTransaction();
        session.endSession();

        res.status(201).json({
            success:true,
            message:"user created successfully",
            data:{
                token,
                user:newUsers[0]
            }
        })
    }
}