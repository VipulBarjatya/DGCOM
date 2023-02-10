import express, { Request, Response } from "express";
const router = express.Router();
import { getProducts, getProductById } from "../controllers/productController";

router.get("/", getProducts);

router.get("/:id", getProductById);

export default router;
