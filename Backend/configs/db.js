import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => console.log("mongoDB connected"));
  } catch (error) {}
};
