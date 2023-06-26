import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongoDB connection established...");
  } catch (error) {
    throw new Error("mongo db connection failed.");
  }
};

export default connectDB;
