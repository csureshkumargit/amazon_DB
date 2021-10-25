const express = require('express');
const route = express.Router();
const ordersController = require('../Controller/order');
route.get('/:username', ordersController.getUserOrderHistory);
route.post('/', ordersController.addUserOrder);


module.exports = route;