import express from "express";
const router = express.Router();
import cardModel from "../models/cardModel.js";

// Route to retrieve five cards
router.get("/", async (req, res) => {
  try {
    const fiveCards = await cardModel.aggregate([{ $sample: { size: 5 } }]);
    return res.status(200).json(fiveCards);
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).send("Internal Server Error");
  }
});

export default router;
