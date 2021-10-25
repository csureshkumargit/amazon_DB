const fashionWomenItemModel = require('../Model/fashionwomen/fashionwomenItems');
const fashionWomenCollectionsModel = require('../Model/fashionwomen/fashionwomenCollections');
const fashionWomenItemDetailsModel = require('../Model/fashionwomen/fashionwomendetailsByProductID');
exports.getFashionWomenItems = (req, res) => {
    fashionWomenItemModel.find()
        .then((fashion_women_items) =>
            res.status(200).json({ fashion_women_items: fashion_women_items }))
        .catch(err => {
            res.status(400).json({ error_Message: err })
        }
        )
}
exports.getFashionWomenCollectionsByItems = (req, res) => {
    const { fashion_id_women } = req.params;

    fashionWomenCollectionsModel.find({ fashion_id_women })
        .then((fashion_women_collections) =>
            res.status(200).json({ fashion_women_collections: fashion_women_collections }))
        .catch(err => {
            res.status(400).json({ error_Message: err })
        }
        )
}
exports.getFashionWomenBasicDetailsByProductID = (req, res) => {
    const { productID } = req.params;

    fashionWomenCollectionsModel.findOne({ productID })
        .then((women_basic_detail_prodID) =>
            res.status(200).json({ fashion_women_basic_detail_prodID: women_basic_detail_prodID }))
        .catch(err => {
            res.status(400).json({ error_Message: err })
        }
        )
}

exports.getFashionWomenDetailsByProductID = (req, res) => {
    const { productID } = req.params;

    fashionWomenItemDetailsModel.findOne({ productID })
        .then((fashion_women_det_prodID) =>
            res.status(200).json({ fashion_women_det_prodID: fashion_women_det_prodID }))
        .catch(err => {
            res.status(400).json({ error_Message: err })
        }
        )
}
exports.getWomenTopDeals = (req, res) => {
    fashionWomenCollectionsModel.find({ price: { $exists: true }, price: { $ne: null } }).sort({ price: 1 }).limit(5)
        .then((women_deals) =>
            res.status(200).json({ women_deals: women_deals }))
        .catch(err => {
            res.status(400).json({ error_Message: err })
        }
        )
}
exports.getFashionWomenCollectionsByFilter = (req, res) => {

    let { prime, lcost, hcost, lrating, hrating, sort, fashion_id_women } = req.body;
    sort = sort ? sort : 1;


    const filterObj = {};
    prime && (filterObj["has_prime"] = prime);
    fashion_id_women && (filterObj["fashion_id_women"] = fashion_id_women);
    lcost && hcost && (filterObj["price"] = { $gte: lcost, $lte: hcost });
    lrating && hrating && (filterObj["stars"] = { $gte: lrating, $lt: hrating });
    console.log('obj', filterObj);
    fashionWomenCollectionsModel.find(filterObj).sort({ price: sort })
        .then((fashionwomen_collection_fillter) => {
            console.log(fashionwomen_collection_fillter);
            res.status(200).json({ fashionwomen_collection_fillter: fashionwomen_collection_fillter });
        })

        .catch(err => {
            res.status(400).json({ error_Message: err })
        }
        )
}
