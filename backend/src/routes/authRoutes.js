import { Router } from "express";
import {getUser, loginUser, logoutUser, signupUser, updateUser} from "../controllers/authController.js"
import { authenticateUser } from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/signup").post(signupUser)

router.route("/login").post(loginUser)

router.route("/profile").get(authenticateUser,getUser)
// router.route("/profile").get(getUser)

// router.route("/update").put(authenticateUser,updateUser)
router.route("/update").put(updateUser) 

router.route("/logout").post(logoutUser)

export default router 