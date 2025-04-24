const getMovies = 'SELECT * FROM "movieInfo"';
const getMovieById = 'SELECT * FROM "movieInfo" WHERE id = $1';
const addMovie = 'INSERT INTO "movieInfo" (title, year, genre, director) VALUES ($1, $2, $3, $4)';
const updateMovie = 'UPDATE "movieInfo" SET title = $1, year = $2, genre = $3, director = $4 WHERE id = $5';

module.exports = {
    getMovies,
    getMovieById,
    addMovie,
    updateMovie
};
