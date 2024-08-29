import express from "express";
import {
  createRoom,
  deleteRoom,
  getAllRoom,
  updateRoomInfo,
} from "../controllers/roomControllers.js";
// Init Router
const router = express.Router();

// Routing
router.post("/", createRoom);
router.get("/all", getAllRoom);
router.put("/update/:id", updateRoomInfo);
router.put("/delete/:id", deleteRoom);

export default router;
