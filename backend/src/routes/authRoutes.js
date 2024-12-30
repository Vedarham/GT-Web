import { Router } from "express";
import {loginUser, signupUser} from "../controllers/authController.js"

const router = Router()

router.route("/signup").post(signupUser)

router.route("/login").post(loginUser)

router.route("/profile").get()

export default router