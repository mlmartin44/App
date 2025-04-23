const { Router } = require('express');
const controller = require('./controller');

const router = Router();


// GET all movies
router.get('/', controller.getMovies);

// GET movie by id (numeric)
router.get('/:id', controller.getMovieById);

// POST a new movie
router.post('/', controller.addMovie);

// PUT update movie by ID
router.put('/:id', controller.updateMovie);

module.exports = router;
