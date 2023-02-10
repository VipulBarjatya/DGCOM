import dotenv from "dotenv";
import users from "./sampleData/users";
import products from "./sampleData/products";
import { userModel } from "./model/userModel";
import { productModel } from "./model/productModel";
import connectDB from "./config/db";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await userModel.deleteMany();
    await productModel.deleteMany();

    const createdUsers = await userModel.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await productModel.insertMany(sampleProducts);

    console.log("DATA IMPORTED");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await userModel.deleteMany();
    await productModel.deleteMany();

    console.log("DATA DESTROYED!");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  console.log("hello");

  importData();
}
