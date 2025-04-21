import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbConnection = async () => {
  const DB = process.env.DB;
  try {
    await mongoose.connect(DB).then(() => {
      console.log("MongoDB connected successfully");
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    serTimeout(dbConnection, 5000); // Retry after 5 seconds
  }
};

export default dbConnection;
