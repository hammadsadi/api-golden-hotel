import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import colors from "colors";
import cookieParser from "cookie-parser";
import connectWithMongoDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import hotelRoute from "./routes/hotelRoutes.js";
import roomRoute from "./routes/roomRoutes.js";
// Init Express
const app = express();

// Init env
dotenv.config();
const PORT = process.env.PORT || 8080;

// Global Middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(cookieParser());

// Routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/hotel", hotelRoute);
app.use("/api/v1/room", roomRoute);

// Listen Server
app.listen(PORT, () => {
  console.log(`Ser Is Running On ${PORT}`.bgGreen.black);
  connectWithMongoDB();
});
