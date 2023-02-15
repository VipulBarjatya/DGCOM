import express, { Request, Response } from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
  addNewProduct,
  removeProduct,
} from "../controllers/productController";

router.get("/", getProducts);

router.get("/:id", getProductById);

router.post("/new", addNewProduct);
router.delete("/remove/:id", removeProduct);

export default router;
