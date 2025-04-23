const getMovies = 'SELECT * FROM "movieInfo"';
const getMovieById = 'SELECT * FROM "movieInfo" WHERE id = $1';
const addMovie = 'INSERT INTO "movieInfo" (id, title) VALUES ($1, $2)';
const updateMovie = 'UPDATE "movieInfo" SET title = $1 WHERE id = $2';

module.exports = {
    getMovies,
    getMovieById,
    addMovie,
    updateMovie
};
