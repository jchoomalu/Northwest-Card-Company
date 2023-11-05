import express from 'express'
import database from './config/database/connection.js'
import cors from 'cors'
import cardRoute from './routes/cardRoute.js'
import bodyParser from 'express'

const app = express();
const port = 1919;

// Middleware
app.use(cors())
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

// Routes

app.use('/api', cardRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
