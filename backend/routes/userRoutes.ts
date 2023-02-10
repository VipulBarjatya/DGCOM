import express, { Request, Response } from "express";
const router = express.Router();
import { authUser } from "../controllers/userController";

router.post("/login", authUser);


export default router;
