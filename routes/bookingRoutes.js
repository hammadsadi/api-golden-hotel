import express from "express";

// Init Router
const router = express.Router();

// Routing
router.get("/", saveUser);

export default router;
