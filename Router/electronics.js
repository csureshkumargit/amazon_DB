const express = require('express');
const route = express.Router();
const electronicsController = require('../Controller/electronics');
route.get('/', electronicsController.getElectronicsItems);
route.get('/deals', electronicsController.getElectronicsTopDeals);
route.get('/details/:productID', electronicsController.getElectronicsDetailsByProductID);
route.get('/basic/:productID', electronicsController.getElectronicsBasicDetailsByProductID);
route.get('/:electronics_id', electronicsController.getElectronicsCollectionsByItems);
route.post('/filter', electronicsController.getElectronicsCollectionsByFilter);


module.exports = route;