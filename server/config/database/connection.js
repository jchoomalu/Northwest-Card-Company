import mongoose from "mongoose";
import addSeeds from "./seeds.js";
import dotenv from 'dotenv';
dotenv.config();

const dbURI = process.env.DB_URI

// Connect to the MongoDB database
mongoose.connect(dbURI);

// Get the default connection
const db = mongoose.connection;

// Handle connection events
db.on('connected', () => {
  console.log('Mongoose connected to ' + dbURI);
  addSeeds()
});

db.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

db.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

process.on('SIGINT', () => {
  db.close(() => {
    console.log('Mongoose connection terminated due to application termination');
    process.exit(0);
  });
});


export default db