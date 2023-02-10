import express, { Request, Response } from "express";

import connectDB from "./config/db";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes";
import userRoutes from "./routes/userRoutes";

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 5100;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
