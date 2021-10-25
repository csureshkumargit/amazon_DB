const express = require('express');
const route = express.Router();
const customerCareController = require('../Controller/customercare');
route.get('/', customerCareController.getCustomerCareDetail);



module.exports = route;