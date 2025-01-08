import { Router } from "express";
import {getUser, loginUser, signupUser} from "../controllers/authController.js"
import { authenticateUser } from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/signup").post(signupUser)

router.route("/login").post(loginUser)

router.route("/profile").get(authenticateUser,getUser)

export default router