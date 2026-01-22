const express = require('express');
const { getUsers } = require('../controllers/user_con');
const logger = require('../middleware/logger');
const { create } = require('../controllers/user_con');

const router = express.Router();

router.get('/users', logger, getUsers);
router.post('/user-post', logger, create);
module.exports = router;
