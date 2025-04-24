const express = require("express");
const cors = require("cors");
const helmet = require("helmet"); // <-- Import helmet
const moviesRoutes = require('./src/movies/routes'); 
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(helmet()); // <-- Add helmet middleware for security best practices
app.disable('x-powered-by'); // <-- Explicitly disable X-Powered-By header
app.use(express.json());
app.use(cors({ origin: '*' }));

// Test route
app.get("/", (req, res) => {
    res.send("Hello and Welcome!");
});

// API route
// Example: GET /api/v1/movies?title=matrix
app.use("/api/v1/movies", moviesRoutes);

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
