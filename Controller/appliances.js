const appliancesBrandModel = require('../Model/appliances/applianceBrand');
const appliancesByBrand = require('../Model/appliances/applianceByBrands');
const appliancesByProductID = require('../Model/appliances/applianceByProductID');
exports.getApplianceBrands = (req, res) => {
    appliancesBrandModel.find()
        .then((appliances) =>
            res.status(200).json({ appliances_brand: appliances }))
        .catch(err => {
            res.status(400).json({ error_Message: err })
        }
        )
}

exports.getApplianceBrandByCollections = (req, res) => {
    const { home_appl_id } = req.params;

    appliancesByBrand.find({ home_appl_id })
        .then((appliances_by_brand) =>
            res.status(200).json({ appliances_by_brand: appliances_by_brand }))
        .catch(err => {
            res.status(400).json({ error_Message: err })
        }
        )
}

exports.getApplianceBasicDetailsByProductID = (req, res) => {
    const { productID } = req.params;

    appliancesByBrand.findOne({ productID })
        .then((appliance_basic_detail_prodID) =>
            res.status(200).json({ appliance_basic_detail_prodID: appliance_basic_detail_prodID }))
        .catch(err => {
            res.status(400).json({ error_Message: err })
        }
        )
}

exports.getApplianceDetailsByProductID = (req, res) => {
    const { productID } = req.params;

    appliancesByProductID.findOne({ productID })
        .then((appliance_by_prodID) =>
            res.status(200).json({ appliance_by_prodID: appliance_by_prodID }))
        .catch(err => {
            res.status(400).json({ error_Message: err })
        }
        )
}

exports.getApplianceTopDeals = (req, res) => {
    appliancesByBrand.find({ price: { $exists: true }, price: { $ne: null } }).sort({ price: 1 }).limit(5)
        .then((appliances_deals) =>
            res.status(200).json({ appliances_deals: appliances_deals }))
        .catch(err => {
            res.status(400).json({ error_Message: err })
        }
        )
}

exports.getApplianceCollectionsByFilter = (req, res) => {

    let { prime, brand, lcost, hcost, lrating, hrating, sort } = req.body;
    sort = sort ? sort : 1;
    lcost = lcost ? lcost : 1;
    hcost = hcost ? hcost : 200000;
    lrating = lrating ? lrating : 1;
    hrating = hrating ? hrating : 6;
    brand = brand ? brand : [1, 2, 3, 4];


    const filterObj = {};

    prime && (filterObj["has_prime"] = prime);
    console.log('obj', filterObj);

    appliancesByBrand.find(filterObj).where({
        price: { $gte: lcost, $lte: hcost }, stars: { $gte: lrating, $lt: hrating }, home_appl_id: { $in: brand }
    }).sort({ price: sort })
        .then((appliances_collection_fillter) => {
            console.log(appliances_collection_fillter);
            res.status(200).json({ appliances_collection_fillter: appliances_collection_fillter });
        })

        .catch(err => {
            res.status(400).json({ error_Message: err })
        }
        )
}
