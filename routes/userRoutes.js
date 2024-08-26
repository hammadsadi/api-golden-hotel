import express from "express";
import {
  createJwt,
  logoutUser,
  me,
  saveUser,
} from "../controllers/userControllers.js";
import verifyToken from "../middlewares/tokenVerify.js";

// Init Router
const router = express.Router();

// Routing
router.post("/", saveUser);
router.post("/jwt", createJwt);
router.get("/logout", logoutUser);
router.get("/me/:email", verifyToken, me);

export default router;
