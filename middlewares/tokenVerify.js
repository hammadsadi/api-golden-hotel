import User from "../models/user.js";
import jwt from "jsonwebtoken";
const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ error: "Unauthorized Access" });
    }

    // Token Verify
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    if (!decoded) {
      return res.status(401).json({ error: "Invalid Token" });
    }
    // Get Me
    const user = await User.findOne({ email: decoded.email });
    if (!user) {
      return res.status(404).json({ error: "User Not Found" });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(500).json({
      message: "error from verifyToken ",
      error: error.message,
    });
  }
};

export default verifyToken;
