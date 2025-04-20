import express from 'express'; // Importing express using this syntax because we are using ES6 modules ,in package.json we have "type": "module"
import cors from 'cors'; // Importing cors to handle cross-origin requests
import cookieParser from 'cookie-parser'; // Importing cookie-parser to handle cookies
import { notFound, errorHandler } from './Middleware/error.middleware.js'; // Importing custom error handling middleware
import authRoute from './routes/auth.route.js'; // Importing authentication routes
import productRoute from './routes/product.route.js'; // Importing product routes
import bannerRoute from './routes/banner.route.js'; // Importing banner routes


const app = express(); 

//cors
app.use(cors()); // Enable CORS for all routes 

// Middleware /json body parser
app.use(express.json()); 

//cookie parser
app.use(cookieParser()); // Middleware to parse cookies from the request headers

// Routes
app.use("/api/v1/auth", authRoute); // Mounting the authentication routes on the specified path
app.use("/api/v1/products", productRoute); // Mounting the product routes on the specified path
app.use("/api/v1/banners", bannerRoute); // Mounting the banner routes on the specified path

//Error handling middleware
app.use(notFound); // Middleware to handle 404 errors
app.use(errorHandler); // Middleware to handle other errors

export default app; 