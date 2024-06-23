const express = require('express');
const apiController = require('../controllers/apiController');
const router = express.Router();

router.get('/', apiController.getHelloWorld);

module.exports = router;
