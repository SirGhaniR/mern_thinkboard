import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ghanifaustaraihan_db_user:pPs0IOt3qkyqTz7q@cluster0.wrtyhbr.mongodb.net/?appName=Cluster0",
    );
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    process.exit(1); // exit with failure
  }
};
