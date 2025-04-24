const pool = require('../../db');
const queries = require('./queries');

// GET all movies
const getMovies = (req, res) => {
    pool.query(queries.getMovies, (error, results) => {
        if (error) {
            console.error("❌ Error fetching movies:", error);
            return res.status(500).send("Database error");
        }
        res.status(200).json(results.rows);
    });
};

// GET a movie by numeric id
const getMovieById = (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
        return res.status(400).send("Invalid ID");
    }
    pool.query(queries.getMovieById, [id], (error, results) => {
        if (error) {
            console.error("❌ Error fetching by ID:", error);
            return res.status(500).send("Database error");
        }
        if (results.rows.length === 0) {
            return res.status(404).send("Movie not found");
        }
        res.status(200).json(results.rows[0]);
    });
};

// POST add a new movie
const addMovie = (req, res) => {
    const { title, year, genre, director } = req.body;
    if (!title || !year || !genre || !director) {
        return res.status(400).send("Missing required fields");
    }
    pool.query(
        queries.addMovie,
        [title, year, genre, director],
        (error) => {
            if (error) {
                console.error("❌ Error adding movie:", error);
                return res.status(500).send("Database error");
            }
            res.status(201).json({ message: "Movie added successfully" });
        }
    );
};

// PUT update movie (all fields) by ID
const updateMovie = (req, res) => {
    const id = parseInt(req.params.id);
    const { title, year, genre, director } = req.body;
    if (!title || !year || !genre || !director) {
        return res.status(400).send("Missing required fields");
    }
    pool.query(
        queries.updateMovie,
        [title, year, genre, director, id],
        (error) => {
            if (error) {
                console.error("❌ Error updating movie:", error);
                return res.status(500).send("Database error");
            }
            res.status(200).send("Movie updated successfully");
        }
    );
};

module.exports = {
    getMovies,
    getMovieById,
    addMovie,
    updateMovie
};
