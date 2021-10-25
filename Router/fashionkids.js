const express = require('express');
const route = express.Router();
const fashionkidsController = require('../Controller/fashionkids');
route.get('/', fashionkidsController.getFashionKidsItems);
route.get('/deals', fashionkidsController.getKidsTopDeals);
route.get('/details/:productID', fashionkidsController.getFashionKidsDetailsByProductID);
route.get('/basic/:productID', fashionkidsController.getFashionKidsBasicDetailsByProductID);
route.get('/:fashion_id_kids', fashionkidsController.getFashionKidsCollectionsByItems);
route.post('/filter', fashionkidsController.getFashionKidsCollectionsByFilter);


module.exports = route;