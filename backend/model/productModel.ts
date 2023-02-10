import mongoose, { Schema, model, Types, ObjectId } from "mongoose";

interface IProduct {
  user: ObjectId;
  name: string;
  image: string;
  brand: string;
  category: string;
  description: string;
  price: number;
  countInStock: number;
}

const productSchema = new Schema<IProduct>(
  {
    user: {
      type: Types.ObjectId,
      required: true,
      ref: "userSchema",
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export const productModel = model<IProduct>("product", productSchema);
