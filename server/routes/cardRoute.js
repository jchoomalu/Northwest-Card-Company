import express from 'express';
const router = express.Router();
import cardModel from '../models/cardModel.js';

// Route to retrieve all documents
router.get('/', async (req, res) => {
    const documents = await cardModel.find({});
    // console.log('docs:', documents)
   return res.status(200)
});

export default router;
