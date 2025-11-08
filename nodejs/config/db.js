import mongoose from "mongoose";

const connectDB = async () => {
  const connectionUrl = process.env.MONGO_URI;

  try {
    mongoose.connect(connectionUrl).then(() => {
      console.log("Database connection successful");
    });
  } catch (err) {
    throw new Error("Error connecting to Database");
  }
};

export default connectDB;
