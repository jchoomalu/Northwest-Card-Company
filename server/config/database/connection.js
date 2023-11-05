import mongoose from "mongoose";

const dbURI = 'mongodb+srv://jasonhoomalu:Goninja.44b@cluster0.ym5m4p6.mongodb.net/'; // Replace with your MongoDB connection string

// Connect to the MongoDB database
mongoose.connect(dbURI);

// Get the default connection
const db = mongoose.connection;

// Handle connection events
db.on('connected', () => {
  console.log('Mongoose connected to ' + dbURI);
});

db.on('error', (err) => {
  console.error('Mongoose connection error:', err);
});

db.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

// Close the Mongoose connection when the application exits
process.on('SIGINT', () => {
  db.close(() => {
    console.log('Mongoose connection terminated due to application termination');
    process.exit(0);
  });
});


export default db