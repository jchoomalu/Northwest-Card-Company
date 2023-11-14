import express from "express";
import Cards from "../models/cardModel.js";
import fs from "fs";
import multer from "multer";
import formidable from "formidable";
import path from "path";
import { __dirname } from "../server.js";
const router = express.Router();

// Route to retrieve five cards
router.get("/", async (req, res) => {
  try {
    const fiveCards = await Cards.aggregate([{ $sample: { size: 5 } }]);
    return res.status(200).json(fiveCards);
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).send("Internal Server Error");
  }
});

// Handle POST request to endpoint with file upload and text fields
router.post("/admin/addcard", async (req, res) => {
  try {
    const card = await Cards.create(req.body);
    return res.status(200).json(card._id);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Define the destination directory for uploaded files
  },
  filename: function (req, file, cb) {
    // Define a unique filename for each uploaded file
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// Create the multer instance with the specified storage options
const upload = multer({ storage: storage });

// POST route to handle file upload
router.post("/admin/addimage/:id", upload.single("file"), async (req, res) => {
  const { id } = req.params
  console.log(id)
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }
  // Access file details from req.file
  const filePath = req.file.path; // Path to the uploaded file
  const newCard = await Cards.findByIdAndUpdate(id, {$set: {imageURL: filePath}}, {new: true})
  return res.status(200).json({ message: "File uploaded successfully" });
});

export default router;
