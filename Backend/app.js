import express from 'express'; // Importing express using this syntax because we are using ES6 modules ,in package.json we have "type": "module"
import cors from 'cors'; // Importing cors to handle cross-origin requests
import { notFound, errorHandler } from './Middleware/error.middleware.js'; // Importing custom error handling middleware
const app = express(); 

// Middleware /json body parser
app.use(express.json()); 

//cors
app.use(cors()); // Enable CORS for all routes 

//Error handling middleware
app.use(notFound); // Middleware to handle 404 errors
app.use(errorHandler); // Middleware to handle other errors

export default app; 