const mobileBrandModel = require('../Model/mobile/mobileBrand');
const mobileByBrand = require('../Model/mobile/mobileByBrands');
const mobileByProductID = require('../Model/mobile/mobileByProductID');
exports.getMobileBrands = (req, res) => {
    mobileBrandModel.find()
        .then((mobile) =>
            res.status(200).json({ mobile_home_data: mobile }))
        .catch(err => {
            res.status(400).json({ error_Message: err })
        }
        )
}

exports.getMobileBrandByCollections = (req, res) => {
    const { mobile_id } = req.params;

    mobileByBrand.find({ mobile_id })
        .then((mobile_by_brand) =>
            res.status(200).json({ mobile_by_brand: mobile_by_brand }))
        .catch(err => {
            res.status(400).json({ error_Message: err })
        }
        )
}

exports.getMobileDetailsByProductID = (req, res) => {
    const { productID } = req.params;

    mobileByProductID.findOne({ productID })
        .then((mobile_by_prodID) =>
            res.status(200).json({ mobile_by_prodID: mobile_by_prodID }))
        .catch(err => {
            res.status(400).json({ error_Message: err })
        }
        )
}
exports.getMobileBasicDetailsByProductID = (req, res) => {
    const { productID } = req.params;

    mobileByBrand.findOne({ productID })
        .then((mobile_basic_detail_prodID) =>
            res.status(200).json({ mobile_basic_detail_prodID: mobile_basic_detail_prodID }))
        .catch(err => {
            res.status(400).json({ error_Message: err })
        }
        )
}
exports.getMobileTopDeals = (req, res) => {
    mobileByBrand.find({ price: { $exists: true }, price: { $ne: null } }).sort({ price: 1 }).limit(5)
        .then((mobile_deals) =>
            res.status(200).json({ mobile_deals: mobile_deals }))
        .catch(err => {
            res.status(400).json({ error_Message: err })
        }
        )
}

exports.getMobileCollectionsByFilter = (req, res) => {

    let { prime, brand, lcost, hcost, lrating, hrating, memory, sort } = req.body;
    sort = sort ? sort : 1;
    lcost = lcost ? lcost : 1;
    hcost = hcost ? hcost : 200000;
    lrating = lrating ? lrating : 1;
    hrating = hrating ? hrating : 6;
    brand = brand ? brand : [1, 2, 3, 4, 5, 6];
    memory = memory ? memory : '';;

    const filterObj = {};

    prime && (filterObj["has_prime"] = prime);
    console.log('obj', filterObj);

    mobileByBrand.find(filterObj).where({
        price: { $gte: lcost, $lte: hcost }, stars: { $gte: lrating, $lt: hrating }, mobile_id: { $in: brand }, name: { $regex: memory }
    }).sort({ price: sort })
        .then((mobile_collection_fillter) => {
            console.log(mobile_collection_fillter);
            res.status(200).json({ mobile_collection_fillter: mobile_collection_fillter });
        })

        .catch(err => {
            res.status(400).json({ error_Message: err })
        }
        )
}


