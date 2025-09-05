import express from "express";
import { 
    currentUser, 
    login, 
    register, 
    verifyMail, 
    logoutUser 
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/", register);

router.post("/login", login);

router.get("/verifyMail/:token", verifyMail);

router.get("/current", currentUser);

router.delete("/deleteToken", logoutUser);

export default router;

// http://localhost:3000/user
