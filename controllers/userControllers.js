import User from "../models/user.js";
import jwt from "jsonwebtoken";
/**
 * @Desc Save User On DB
 * @Method POST
 * @Access PUBLIC
 */

export const saveUser = async (req, res) => {
  try {
    const { email, photo, name } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(200).json(user);
    }
    const newUser = new User({
      email,
      photo,
      name,
    });
    if (newUser) {
      newUser.save();
      return res.status(200).json({ user: newUser });
    }
    return res.status(400).json({ error: "Invalid Data Format" });
  } catch (error) {
    return res.status(500).json({
      message: "error from saveUser Controllers",
      error: error.message,
    });
  }
};

/**
 * @Desc Create JWT
 * @Method POST
 * @Access PUBLIC
 */

export const createJwt = async (req, res) => {
  try {
    const user = req.body;
    const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "365d",
    });
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      })
      .send({ success: true });
  } catch (error) {
    return res.status(500).json({
      message: "error from saveUser createJwt",
      error: error.message,
    });
  }
};

/**
 * @Desc Remove Token
 * @Method POST
 * @Access Private
 */

export const logoutUser = async (req, res) => {
  try {
    res
      .clearCookie("token", {
        maxAge: 0,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      })
      .send({ success: true });
  } catch (error) {
    return res.status(500).json({
      message: "error from logout",
      error: error.message,
    });
  }
};

/**
 * @Desc Create JWT
 * @Method POST
 * @Access PUBLIC
 */

export const me = async (req, res) => {
  try {
    const email = req.params.email;
    if (email !== req?.user?.email) {
      return res.status(401).json({
        message: "UnAuthorized Access",
      });
    }
    res.send(req.user);
  } catch (error) {
    return res.status(500).json({
      message: "error from saveUser createJwt",
      error: error.message,
    });
  }
};
