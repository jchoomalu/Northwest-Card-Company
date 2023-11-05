import express from 'express'
import bodyParser from 'body-parser'
import database from './config/database/connection.js'
import sampleRoute from './routes/sampleRoute.js'

const app = express();
const port = 1919;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/samples', sampleRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
