const express = require('express');
const router = express.Router();

router.use(require('./billRoqutes'));
router.use(require('./copayerRoutes'));
router.use(require('./monthRoutes'));

module.exports = router;
