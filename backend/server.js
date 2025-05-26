import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
import dotenv from "dotenv"
import path from "path";
import connectDB from "./src/db/index.js";

dotenv.config({ path: path.resolve('src', './.env') });
const app = express();
app.use(express.json());

app.use(cors({
    origin: process.env.CORS_ORIGIN ||"http://localhost:3000",
    credentials: true 
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// app.get('/api/test-cookies', (req, res) => {
//     console.log("Cookies from Request:", req.cookies);
//     res.json({ message: "Cookies received!", cookies: req.cookies });
//   });
  
import authRouter from "./src/routes/authRoutes.js"
import hostRouter from "./src/routes/hostRouter.js"
import organizerRouter from "./src/routes/organizerRouter.js"
import stripeRoutes from "./src/routes/stripeRoutes.js"
import razorpayRoutes from "./src/routes/razorpayRoutes.js";

app.use("/api/auth", authRouter);
app.use("/api/host",hostRouter);
app.use("/api/organizer",organizerRouter);
app.use("/api/paymentViaStripe", stripeRoutes);
app.use("/api/paymentViaRazorpay",razorpayRoutes);

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8080, () => { 
            console.log(`Server is running at ${process.env.PORT}`)
        })
    })
    .catch(err => {
        console.log("mongoDb connection failed", err)
    })