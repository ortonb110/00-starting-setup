const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const productController = require('../Controllers/product');
const router = express.Router();

router.get('/', productController.getShopProducts);

module.exports = router;
