import express from "express";
const router = express.Router();
import UserSchema from "../models/userModel.js";
import { generateToken, verifyToken } from "../middleware/jwtMiddleware.js";

router.post("/users/signup", createUser);
router.post("/users/signin", loginUser);
router.get("/users/verify", verifyUser);

async function createUser(req, res) {
  try {
    const user = await UserSchema.create(req.body);
    const token = generateToken({
      userId: user._id,
    });
    res.status(200).json({ token });
    return;
  } catch (error) {
    if (error.code === 11000) {
      return res.status(403).send("This Email Is Already In Use");
    } else {
      console.error("Error creating user:", error);
      return res.status(500).send("Internal Server Error");
    }
  }
}

export async function verifyUser(req, res) {
  const token = req.headers.authorization.split(" ")[1];
  const decoded = verifyToken(token);
  if (decoded) {
    const user = await UserSchema.findById(decoded.userId);
    res.status(200).json(user);
  } else {
    res.status(401).json({ message: "Invalid token" });
  }
}

export async function loginUser(req, res) {
  const { email, password } = req.body;
  try {
    // Find the user by email
    const user = await UserSchema.findOne({ email: email });
 
    if (!user) {
      // User not found
      return res.status(401).json({ message: "Invalid Email Address" });
    }
    // Verify the password
    const isPasswordValid = user.verifyPassword(password);
    console.log(isPasswordValid);
    //on valid crypto hash generate web token and return it to client
    if (isPasswordValid) {
      const token = generateToken({
        userId: user._id,
      });
      res.status(200).json({ token });
      return;
    } else {
      // Password is invalid
      return res.status(403).json({ message: "Invalid Password" });
    }
  } catch (error) {
    // Handle any other errors
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export default router;
