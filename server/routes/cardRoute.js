import express from 'express';
const router = express.Router();
import cardModel from '../models/cardModel.js';

// Route to retrieve all documents
router.get('/', async (req, res) => {
    // const documents = await cardModel.find({});
   return res.status(200).json({this: "getitnfgfg"})
});



export default router;
