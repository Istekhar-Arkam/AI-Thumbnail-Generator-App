import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => console.log("mongoDB connected"));
    await mongoose.connect(process.env.MONGODB_URI as string);
  } catch (error) {
    console.log("mongoDB connection error:", error);
  }
};

export default connectDB;
