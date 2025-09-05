import express from "express";
import { currentUser, login, register, verifyMail } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/", register);

router.post("/login", login);

router.get("/verifyMail/:token", verifyMail);

router.get("/current", currentUser);

export default router;

// http://localhost:3000/user
