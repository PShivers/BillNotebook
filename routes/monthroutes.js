const express = require('express');
const router = express.Router();
const monthsController = require('../controllers/monthsController.js');

router.get('/months', monthsController.index);
router.post('/months', monthsController.create);

router.get('/months/:id', monthsController.show);
router.put('/months/:id', monthsController.update);
router.delete('/months/:id', monthsController.delete);

module.exports = router;
