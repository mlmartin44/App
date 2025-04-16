const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getMovies);// the more contorollers I have **add here?

module.exports = router;