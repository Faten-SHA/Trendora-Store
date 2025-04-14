import express from 'express'; // Importing express using this syntax because we are using ES6 modules ,in package.json we have "type": "module"
import cors from 'cors'; // Importing cors to handle cross-origin requests
const app = express(); 

// Middleware /json body parser
app.use(express.json()); 

//cors
app.use(cors()); // Enable CORS for all routes 


export default app; 