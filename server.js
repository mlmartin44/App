const fs = require("fs");
const http = require("http");
const https = require("https");
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const moviesRoutes = require('./src/movies/routes');
require("dotenv").config();

const app = express();

// Middleware
app.use(helmet());
app.disable('x-powered-by');
app.use(express.json());

// CORS: Allow only trusted domains (update as needed)
const allowedOrigins = [
  "http://localhost:3000",           // for local dev
  "http://127.0.0.1:5500",           // <--- ADDED for Live Server local testing!
  "https://your-frontend.com"        // add your real domains here!
];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1) {
      return callback(null, true);
    } else {
      return callback(new Error("Not allowed by CORS"));
    }
  }
}));

// Test route
app.get("/", (req, res) => {
  res.send("Hello and Welcome!");
});

// API route
app.use("/api/v1/movies", moviesRoutes);

// Ports
const HTTP_PORT = process.env.HTTP_PORT || 3000;
const HTTPS_PORT = process.env.HTTPS_PORT || 3443;

// SSL Options for HTTPS
const sslOptions = {
  key: fs.readFileSync("server.key"),      // Update path as needed
  cert: fs.readFileSync("server.cert"),
};

// Start HTTP server
http.createServer(app).listen(HTTP_PORT, () => {
  console.log(`HTTP server running on http://localhost:${HTTP_PORT}`);
});

// Start HTTPS server
https.createServer(sslOptions, app).listen(HTTPS_PORT, () => {
  console.log(`HTTPS server running on https://localhost:${HTTPS_PORT}`);
});
