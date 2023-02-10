import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (process.env.MONGO_URL) {
      const conn = await mongoose.connect(process.env.MONGO_URL);
      console.log(`MongoDB Connected at: ${conn.connection.host}`);
    } else {
      console.error("MongoDB URL is not defined in the environment variables.");
    }
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
