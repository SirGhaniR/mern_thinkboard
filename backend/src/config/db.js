import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const dbUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/thinkboard";
    await mongoose.connect(dbUri);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1); // exit with failure
  }
};
