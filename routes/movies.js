const router = require('express').Router();
const {
  getMovies, createMovie, deleteMovie,
} = require('../../../Downloads/movies-explorer-api-level-1/controllers/movies');
const { movieValidation, idValidation } = require('../../../Downloads/movies-explorer-api-level-1/middlewares/validationCheck');

router.get('/', getMovies);
router.post('/', movieValidation, createMovie);
router.delete('/:id', idValidation, deleteMovie);

module.exports = router;
