import mongoose from "mongoose";
import { DB_URI } from "../config/env.js";

if (!DB_URI) {
  throw new Error("DB_URI is not defined");
}

const connectToDatabase = async () => {
  console.log("Connecting to MongoDB...");
  try {
    console.log(DB_URI)
    await mongoose.connect(DB_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    console.log("Connected to MongoDB2");

    console.error("Failed to connect to MongoDB");
    process.exit(1);
  }
};

export default connectToDatabase;
