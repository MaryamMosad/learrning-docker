const router = require('express').Router()
const controllers = require('./controller');

router.get('/movies', controllers.getAllMovies);

router.post('/movies', controllers.addNewMovie)

module.exports = router;