
import express from "express"; 
import mongoose from "mongoose"; 
import bodyParser from "body-parser"; 
import dotenv from "dotenv"; 

import route from "./routes/userRoutes.js";
// Initialize Express app
const app = express();

// Middleware for parsing JSON request bodies
app.use(bodyParser.json());

// Load environment variables from .env file
dotenv.config();

// Define port for the server to listen on
const PORT = process.env.PORT || 5000;

// Define MongoDB connection URL from environment variables
const MONGOURL = process.env.MONGO_URL;

// Connect to MongoDB database
mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("Database connected successfully."); // Log successful database connection
    // Start server on specified port
    app.listen(PORT, () => {
      console.log(`Server is running on port : ${PORT}`); // Log server running message
    });
  })
  .catch((error) => console.log(error)); // Log error if database connection fails

  // Line to be added 
app.use("/api/user", route);