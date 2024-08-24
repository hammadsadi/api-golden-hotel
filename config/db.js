import mongoose from "mongoose";

// Connect With MongoDB
const connectWithMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB Connected Successful".bgCyan.black);
  } catch (error) {
    console.log(`${error.message}`.bgRed.black);
  }
};

export default connectWithMongoDB;
