import express from 'express';
const router = express.Router();
import User from '../models/userModel.js';

router.post('/users/signup', async (req, res) => {
    try {
    const user = await User.create(req.body)
    return res.status(200).json(user)
    } catch (error) {
        if (error.code === 11000) {
            return res.status(401).send("This Email Is Already In Use")
        }  
    }
})

export default router;