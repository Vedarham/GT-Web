
import { Router } from "express";
import { createStripeSession } from "../controllers/stripeController.js";
import bodyParser from "body-parser";

const router = Router();

router.post("/create-session", createStripeSession);
// router.post("/webhook", bodyParser.raw({ type: "application/json" }), stripeWebhook);
 
export default router;