const fashionMenItemModel = require('../Model/fashionmen/fashionmenItems');
const fashionMenCollectionsModel = require('../Model/fashionmen/fashionmenCollections');
const fashionmenItemDetailsModel = require('../Model/fashionmen/fashionmendetailsByProductID');
exports.getFashionMenItems = (req, res) => {
    fashionMenItemModel.find()
        .then((fashion_men_items) =>
            res.status(200).json({ fashion_men_items: fashion_men_items }))
        .catch(err => {
            res.status(400).json({ error_Message: err })
        }
        )
}
exports.getFashionMenCollectionsByItems = (req, res) => {
    const { fashion_id_men } = req.params;

    fashionMenCollectionsModel.find({ fashion_id_men })
        .then((fashion_men_collections) =>
            res.status(200).json({ fashion_men_collections: fashion_men_collections }))
        .catch(err => {
            res.status(400).json({ error_Message: err })
        }
        )
}

exports.getFashionMenBasicDetailsByProductID = (req, res) => {
    const { productID } = req.params;

    fashionMenCollectionsModel.findOne({ productID })
        .then((men_basic_detail_prodID) =>
            res.status(200).json({ fashion_men_basic_detail_prodID: men_basic_detail_prodID }))
        .catch(err => {
            res.status(400).json({ error_Message: err })
        }
        )
}

exports.getFashionMenDetailsByProductID = (req, res) => {
    const { productID } = req.params;

    fashionmenItemDetailsModel.findOne({ productID })
        .then((fashion_men_det_prodID) =>
            res.status(200).json({ fashion_men_det_prodID: fashion_men_det_prodID }))
        .catch(err => {
            res.status(400).json({ error_Message: err })
        }
        )
}

exports.getMenTopDeals = (req, res) => {
    fashionMenCollectionsModel.find({ price: { $exists: true }, price: { $ne: null } }).sort({ price: 1 }).limit(5)
        .then((men_deals) =>
            res.status(200).json({ men_deals: men_deals }))
        .catch(err => {
            res.status(400).json({ error_Message: err })
        }
        )
}

exports.getFashionMenCollectionsByFilter = (req, res) => {

    let { prime, lcost, hcost, lrating, hrating, sort, fashion_id_men } = req.body;
    sort = sort ? sort : 1;


    const filterObj = {};
    prime && (filterObj["has_prime"] = prime);
    fashion_id_men && (filterObj["fashion_id_men"] = fashion_id_men);
    lcost && hcost && (filterObj["price"] = { $gte: lcost, $lte: hcost });
    lrating && hrating && (filterObj["stars"] = { $gte: lrating, $lt: hrating });
    console.log('obj', filterObj);
    fashionMenCollectionsModel.find(filterObj).sort({ price: sort })
        .then((fashionmen_collection_fillter) => {
            console.log(fashionmen_collection_fillter);
            res.status(200).json({ fashionmen_collection_fillter: fashionmen_collection_fillter });
        })

        .catch(err => {
            res.status(400).json({ error_Message: err })
        }
        )
}
