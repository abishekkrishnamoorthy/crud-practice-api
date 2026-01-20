const express = require('express');
const { getUsers } = require('../controllers/user_con');
const logger = require('../middleware/logger');

const router = express.Router();

// middleware applied ONLY to this route
router.get('/users', logger, getUsers);

module.exports = router;
