import express from 'express'
const router = express.Router();
import SampleModel from '../models/sampleModel.js'

// Route to create a new document
router.post('/', async (req, res) => {
  try {
    const sampleDoc = new SampleModel({ name: req.body.name });
    await sampleDoc.save();
    res.status(201).json(sampleDoc);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to retrieve all documents
router.get('/', async (req, res) => {
  try {
    const documents = await SampleModel.find();
    res.json(documents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router
