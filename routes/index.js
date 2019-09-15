const express = require('express');
const router = express.Router();

router.use(require('./billRoutes'));

module.exports = router;
