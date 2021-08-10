const router = require('express').Router();

const usersRouter = require('./users');
const moviesRouter = require('./movies');

const { createUser, login } = require('../../../Downloads/movies-explorer-api-level-1/controllers/users');
const auth = require('../../../Downloads/movies-explorer-api-level-1/middlewares/auth');

const NotFoundError = require('../errors/NotFoundError');

const { CRASH_TEST_MSG, NOT_FOUND_ERROR_MSG } = require('../../../Downloads/movies-explorer-api-level-1/utils/constants');

const {
  registrValidation,
  loginValidation,
} = require('../../../Downloads/movies-explorer-api-level-1/middlewares/validationCheck');

router.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error(CRASH_TEST_MSG);
  }, 0);
});

router.post('/signup', registrValidation, createUser);

router.all('/signup', () => {
  throw new NotFoundError(`${NOT_FOUND_ERROR_MSG}`);
});

router.post('/signin', loginValidation, login);

router.all('/signin', () => {
  throw new NotFoundError(`${NOT_FOUND_ERROR_MSG}`);
});

router.use(auth);

router.use('/users', usersRouter);
router.use('/movies', moviesRouter);
router.all('*', () => {
  throw new NotFoundError(`${NOT_FOUND_ERROR_MSG}`);
});

module.exports = router;
