import express from "express";
import {
  createHotel,
  deleteHotel,
  getAllHotel,
  updateHotelInfo,
} from "../controllers/hotelControllers.js";

// Init Router
const router = express.Router();

// Routing
router.post("/", createHotel);
router.get("/get-all", getAllHotel);
router.put("/update/:id", updateHotelInfo);
router.delete("/delete/:id", deleteHotel);

export default router;
