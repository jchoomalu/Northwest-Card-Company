import mongoose from "mongoose";

const cardSchema = new mongoose.Schema(
  {
    player: { type: String, required: true },
    year: { type: Number, required: true },
    sport: {
      type: String,
      enum: ["basketball", "baseball", "football", "hockey"],
      required: true,
    },
    team: String,
    cardNumber: String,
    condition: String,
    value: Number,
    price: Number,
    graded: {
      PSA: Number,
      BGS: Number,
    },
    imageURL: String,
    description: String,
  },
  { timestamps: true }
);

const Card = mongoose.model("card", cardSchema);

export default Card;
