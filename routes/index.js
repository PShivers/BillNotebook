const express = require('express');
const router = express.Router();

router.use(require('./billRoutes'));
router.use(require('./copayerRoutes'));
router.use(require('./monthoutes'));

module.exports = router;
