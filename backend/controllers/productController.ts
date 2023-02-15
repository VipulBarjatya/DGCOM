import { Request, Response } from "express";
import { productModel } from "../model/productModel";

// @desc     fetch all products
// @route    GET    /api/products
// @access   Public
export const getProducts = async (req: Request, res: Response) => {
  const products = await productModel.find({});
  res.json(products);
};

// @desc     fetch product by id
// @route    GET    /api/products/:id
// @access   Public
export const getProductById = async (req: Request, res: Response) => {
  const product = await productModel.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).send("Product not found");
  }
};

// @desc     add product
// @route    post    /api/products/new
// @access   Private/ Admin
export const addNewProduct = async (req: Request, res: Response) => {
  const product = await productModel.create(req.body);

  if (product) {
    res.json({ message: "Product added successfully" });
  } else {
    res.status(404).send("Product not found");
  }
};

// @desc     delete product
// @route    post    /api/products/:id
// @access   Private/ Admin
export const removeProduct = async (req: Request, res: Response) => {
  const product = await productModel.findByIdAndDelete(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404).send("Product not found");
  }
};
