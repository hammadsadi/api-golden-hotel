import express from "express";
import {
  createJwt,
  logoutUser,
  saveUser,
} from "../controllers/userControllers.js";

// Init Router
const router = express.Router();

// Routing
router.post("/", saveUser);
router.post("/jwt", createJwt);
router.get("/logout", logoutUser);

export default router;
