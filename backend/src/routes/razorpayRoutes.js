import { Router } from "express";
import { createOrder } from "../controllers/razorpayController";
const router = Router();

router.route('/create-order').post(createOrder)

export default router