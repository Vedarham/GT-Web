import { Router } from "express";
import {  switchToOrganizer } from "../controllers/organizerController.js";
 
const router = Router();

router.route('/switch').post(switchToOrganizer)


export default router