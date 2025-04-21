const pool = require('../../db');
const queries = require('./queries');

// Get all movies
const getMovies = (req, res) => {
    pool.query(queries.getMovies, (error, results) => {
        if (error) {
            console.error("❌ Database error details:", error);
            return res.status(500).send("Database error");
        }
        res.status(200).json(results.rows);
    });
};

// Get filtered movies by title
const getFilteredMovies = (req, res) => {
    const { title } = req.query;

    if (!title) {
        return res.status(400).send("Missing 'title' query parameter");
    }

    // Use the query from queries.js
    const values = [`%${title}%`];
    pool.query(queries.searchMoviesByTitle, values, (error, results) => {
        if (error) {
            console.error("❌ Filter query error:", error);
            return res.status(500).send("Database error");
        }
        res.status(200).json(results.rows);
    });
};

module.exports = {
    getMovies,
    getFilteredMovies,
};
