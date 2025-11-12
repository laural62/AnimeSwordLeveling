import express from "express";
import { 
    currentUser, 
    login, 
    register, 
    verifyMail, 
    logoutUser,
    forgotPassword,
    resetPassword
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/verifyMail/:token", verifyMail);

router.get("/current", currentUser);

router.delete("/deleteToken", logoutUser);

router.post("/forgot-password", forgotPassword);

router.post("/reset-password/:token", resetPassword);

export default router;

// http://localhost:3000/user
