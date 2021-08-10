const router = require('express').Router();
const {
  patchUser, getCurrentUser,
} = require('../../../Downloads/movies-explorer-api-level-1/controllers/users');
const { userInfoValidation } = require('../../../Downloads/movies-explorer-api-level-1/middlewares/validationCheck');

router.get('/me', getCurrentUser);
router.patch('/me', userInfoValidation, patchUser);

module.exports = router;
