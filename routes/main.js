const express = require('express');
const router = express.Router();

router.use('/', require('./site.js'));
router.use('/api', require('./api.js'));
// router.use('/auth', require('./auth.js'));
// router.use('/users', require('./users.js'));


module.exports = router;
