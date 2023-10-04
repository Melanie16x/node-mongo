import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config('../env');

const MONGODBURL = 'mongodb+srv://melanie:45817919@cluster0.duzkvmf.mongodb.net/';


export const connectDB = async ()=>{
    try {
        await mongoose.connect(MONGODBURL);
        console.log('base de datos conectada!');
    } catch (error) {
        console.log('error al conectar la base de datos ',error);
    }
};

