const express = require('express');
const route = express.Router();
const fashionwomenController = require('../Controller/fashionwomen');
route.get('/', fashionwomenController.getFashionWomenItems);
route.get('/deals', fashionwomenController.getWomenTopDeals);
route.get('/details/:productID', fashionwomenController.getFashionWomenDetailsByProductID);
route.get('/basic/:productID', fashionwomenController.getFashionWomenBasicDetailsByProductID);
route.get('/:fashion_id_women', fashionwomenController.getFashionWomenCollectionsByItems);
route.post('/filter', fashionwomenController.getFashionWomenCollectionsByFilter);


module.exports = route;