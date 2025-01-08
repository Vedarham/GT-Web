import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import path from "path";
import bodyParser from "body-parser";
import connectDB from "./src/db/index.js";
dotenv.config({ path: path.resolve('src', './.env') });
const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
app.use(bodyParser.json())

// app.use(express.json({ limit: "16kb" })) // this config is done to set the json recieve so not to crash server
// app.use(express.urlencoded({ extended: true, limit: "16kb" }))// this is to encode url arham'+'sabadra arham%20sabadra and get proper name  
// app.use(express.static("public"))

import authRouter from "./src/routes/authRoutes.js"

app.get('/',(req,res)=>{
    res.send('Server is Ready')
})

app.use("/api/auth", authRouter)

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at ${process.env.PORT}`)
        })
    })
    .catch(err => {
        console.log("mongoDb connection failed", err)
    })