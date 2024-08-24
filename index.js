import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import colors from "colors";
import connectWithMongoDB from "./config/db.js";

// Init Express
const app = express();

// Init env
dotenv.config();
const PORT = process.env.PORT || 8080;

// Global Middleware
app.use(express.json());
app.use(cors());

// Listen Server
app.listen(PORT, () => {
  console.log(`Ser Is Running On ${PORT}`.bgGreen.black);
  connectWithMongoDB();
});
