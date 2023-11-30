import express from "express";
import database from "./config/database/connection.js";
import cors from "cors";
import cardRoute from "./routes/cardRoute.js";
import userRoutes from "./routes/userRoutes.js";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import path from "path";
import { dirname } from "path";
import dotenv from 'dotenv';
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

const app = express();
const port = 1919;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "public")));
app.use('/uploads', express.static('uploads'));

// Routes
app.use("/api", cardRoute);
app.use("/api", userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
