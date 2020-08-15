const express = require('express');
const router = express.Router();
const CategoriesController = require('../controllers/CategoriesController');

router.get('/categories', CategoriesController.getAll);

module.exports = router;
