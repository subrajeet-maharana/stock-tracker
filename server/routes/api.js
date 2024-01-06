const express = require('express');
const stocksController = require('../controllers/stocksController');

const router = express.Router();

router.get('/', stocksController.getStockPrices);

module.exports = router;
