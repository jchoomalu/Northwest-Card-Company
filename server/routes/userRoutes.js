import express from 'express';
const router = express.Router();
import User from '../models/userModel.js';
import { generateToken, verifyToken } from '../middleware/jwtMiddleware.js';

router.post('/users/signup', createUser)
router.get('/users/verify', verifyUser) 

async function createUser(req, res) {
    try {
      const user = await User.create(req.body);
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
  

async function verifyUser (req, res) {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = verifyToken(token);
    if (decoded) {
      const user = await User.findById(decoded.userId)
      res.status(200).json(user);
    } else {
      res.status(401).json({ message: 'Invalid token' });
    }
}


export default router;