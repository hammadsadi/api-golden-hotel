import express from "express";
import { createRoom } from "../controllers/roomControllers.js";
// Init Router
const router = express.Router();

// Routing
router.post("/", createRoom);

export default router;
