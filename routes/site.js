const express = require('express');
const router = express.Router();
const SiteController = require('../controllers/SiteController');

router.get('/', SiteController.getIndex);

module.exports = router;
