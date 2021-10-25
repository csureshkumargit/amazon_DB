const express = require('express');
const route = express.Router();
const searchProductController = require('../Controller/searchProduct');
route.get('/:searchword', searchProductController.getProductsBySearch);
module.exports = route;