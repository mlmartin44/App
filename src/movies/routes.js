const { Router } = require('express');
const controller = require('./controller');

const router = Router();

// GET all movies
router.get('/', controller.getMovies);

// 🔍 GET filtered movies by title (e.g. ?title=matrix)
router.get('/search', controller.getFilteredMovies);

module.exports = router;
