const express = require('express');
const route = express.Router();
const appliancesController = require('../Controller/appliances');
route.get('/', appliancesController.getApplianceBrands);
route.get('/deals', appliancesController.getApplianceTopDeals);
route.get('/details/:productID', appliancesController.getApplianceDetailsByProductID);
route.get('/basic/:productID', appliancesController.getApplianceBasicDetailsByProductID);
route.get('/:home_appl_id', appliancesController.getApplianceBrandByCollections);
route.post('/filter', appliancesController.getApplianceCollectionsByFilter);


module.exports = route;