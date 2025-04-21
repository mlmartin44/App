const getMovies = 'SELECT * FROM "movieInfo"';
const searchMoviesByTitle = 'SELECT * FROM "movieInfo" WHERE LOWER(title) LIKE LOWER($1)';

module.exports = {
    getMovies,
    searchMoviesByTitle
};
