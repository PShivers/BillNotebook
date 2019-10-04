const express = require('express');
const router = express.Router();
const copayersController = require('../controllers/copayersController.js');

router.get('/copayers', copayersController.index);
router.post('/copayers', copayersController.create);

router.get('/copayers/:id', copayersController.show);
router.put('/copayers/:id', copayersController.update);
router.delete('/copayers/:id', copayersController.delete);

module.exports = router;
