const express = require('express');
const route = express.Router();
const tempOrdersController = require('../Controller/tempOrders');
route.get('/:username', tempOrdersController.getUserRecentTempTransaction);
route.post('/', tempOrdersController.addUserRecentTempTransaction);
route.delete('/:username', tempOrdersController.removeUserRecentTempTransaction);


module.exports = route;