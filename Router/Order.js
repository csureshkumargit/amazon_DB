const express = require('express');
const route = express.Router();
const ordersController = require('../Controller/order');
const usersController = require('../Controller/users');
route.get('/:username', usersController.validateToken, ordersController.getUserOrderHistory);
route.post('/', ordersController.addUserOrder);


module.exports = route;