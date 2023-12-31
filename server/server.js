import express from "express";
import database from "./config/database/connection.js";
import cors from "cors";
import cardRoute from "./routes/cardRoute.js";
import userRoutes from "./routes/userRoutes.js";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import path from "path";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log(__dirname)
const app = express();
const port = 1919;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "public/images")));

// Routes
app.use("/api", cardRoute);
app.use("/api", userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
