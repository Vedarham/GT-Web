import dotenv from "dotenv"
import path from "path";
dotenv.config({ path: path.resolve('src', '../.env') }); // for process.env. to work

import mongoose from "mongoose";

const connectDB = async()=>{
    try{
    const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URI}`)
    console.log(`MongoDb connected DB DB_HOST: ${connectionInstance.connection.host}`)    
}catch(error){
        console.error("MONGODB connection failed! ",error)
        process.exit(1) 
    }
}

export default connectDB