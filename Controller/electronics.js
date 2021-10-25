const electronicsItemModel = require('../Model/electronics/electronicsItems');
const electronicsCollectionsModel = require('../Model/electronics/electronicsCollections');
const electronicsItemDetailsModel = require('../Model/electronics/electronicsdetailsByProductID');
exports.getElectronicsItems = (req, res) => {
    electronicsItemModel.find()
        .then((electronics_items) =>
            res.status(200).json({ electronics_items: electronics_items }))
        .catch(err => {
            res.status(400).json({ error_Message: err })
        }
        )
}
exports.getElectronicsCollectionsByItems = (req, res) => {
    const { electronics_id } = req.params;

    electronicsCollectionsModel.find({ electronics_id })
        .then((electronics_collections) =>
            res.status(200).json({ electronics_collections: electronics_collections }))
        .catch(err => {
            res.status(400).json({ error_Message: err })
        }
        )
}

exports.getElectronicsDetailsByProductID = (req, res) => {
    const { productID } = req.params;

    electronicsItemDetailsModel.findOne({ productID })
        .then((electronics_det_prodID) =>
            res.status(200).json({ electronics_det_prodID: electronics_det_prodID }))
        .catch(err => {
            res.status(400).json({ error_Message: err })
        }
        )
}

exports.getElectronicsBasicDetailsByProductID = (req, res) => {
    const { productID } = req.params;

    electronicsCollectionsModel.findOne({ productID })
        .then((electronics_basic_detail_prodID) =>
            res.status(200).json({ electronics_basic_detail_prodID: electronics_basic_detail_prodID }))
        .catch(err => {
            res.status(400).json({ error_Message: err })
        }
        )
}

exports.getElectronicsTopDeals = (req, res) => {
    electronicsCollectionsModel.find({ price: { $exists: true }, price: { $ne: null } }).sort({ price: 1 }).limit(5)
        .then((electronic_deals) =>
            res.status(200).json({ electronic_deals: electronic_deals }))
        .catch(err => {
            res.status(400).json({ error_Message: err })
        }
        )
}

exports.getElectronicsCollectionsByFilter = (req, res) => {

    let { prime, brand, lcost, hcost, lrating, hrating, sort, electronics_id } = req.body;
    sort = sort ? sort : 1;


    const filterObj = {};
    prime && (filterObj["has_prime"] = prime);
    electronics_id && (filterObj["electronics_id"] = electronics_id);
    lcost && hcost && (filterObj["price"] = { $gte: lcost, $lte: hcost });
    lrating && hrating && (filterObj["stars"] = { $gte: lrating, $lt: hrating });
    brand && (filterObj["name"] = { $regex: brand });
    console.log('obj', filterObj);
    electronicsCollectionsModel.find(filterObj).sort({ price: sort })
        .then((electronics_collection_fillter) => {
            console.log(electronics_collection_fillter);
            res.status(200).json({ electronics_collection_fillter: electronics_collection_fillter });
        })

        .catch(err => {
            res.status(400).json({ error_Message: err })
        }
        )
}