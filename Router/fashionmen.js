const express = require('express');
const route = express.Router();
const fashionmenController = require('../Controller/fashionmen');
route.get('/', fashionmenController.getFashionMenItems);
route.get('/deals', fashionmenController.getMenTopDeals);
route.get('/details/:productID', fashionmenController.getFashionMenDetailsByProductID);
route.get('/basic/:productID', fashionmenController.getFashionMenBasicDetailsByProductID);
route.get('/:fashion_id_men', fashionmenController.getFashionMenCollectionsByItems);
route.post('/filter', fashionmenController.getFashionMenCollectionsByFilter);


module.exports = route;