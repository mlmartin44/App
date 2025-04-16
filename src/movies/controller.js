const pool = require('../../db');
const queries = require('./queries');

const getMovies = (req, res) => {
    pool.query(queries.getMovies, (error, results) => {
        if (error) {
            console.error("❌ Database error details:", error);
            return res.status(500).send("Database error");
        }
        res.status(200).json(results.rows);
    });
};

module.exports = {
    getMovies,
};
