const express = require('express');
const router = express.Router();
const billsController = require('../controllers/billsController.js');

router.get('/bills', billsController.index);
router.post('/bills', billsController.create);

router.get('/bills/:id', billsController.show);
router.put('/bills/:id', billsController.update);
router.delete('/bills/:id', billsController.delete);

module.exports = router;
