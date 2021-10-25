const fashionKidsItemModel = require('../Model/fashionkids/fashionkidsItems');
const fashionKidsCollectionsModel = require('../Model/fashionkids/fashionkidsCollections');
const fashionKidsItemDetailsModel = require('../Model/fashionkids/fashionkidsdetailsByProductID');
exports.getFashionKidsItems = (req, res) => {
    fashionKidsItemModel.find()
        .then((fashion_kids_items) =>
            res.status(200).json({ fashion_kids_items: fashion_kids_items }))
        .catch(err => {
            res.status(400).json({ error_Message: err })
        }
        )
}
exports.getFashionKidsCollectionsByItems = (req, res) => {
    const { fashion_id_kids } = req.params;

    fashionKidsCollectionsModel.find({ fashion_id_kids })
        .then((fashion_kids_collections) =>
            res.status(200).json({ fashion_kids_collections: fashion_kids_collections }))
        .catch(err => {
            res.status(400).json({ error_Message: err })
        }
        )
}

exports.getFashionKidsBasicDetailsByProductID = (req, res) => {
    const { productID } = req.params;

    fashionKidsCollectionsModel.findOne({ productID })
        .then((kids_basic_detail_prodID) =>
            res.status(200).json({ fashion_kids_basic_detail_prodID: kids_basic_detail_prodID }))
        .catch(err => {
            res.status(400).json({ error_Message: err })
        }
        )
}

exports.getFashionKidsDetailsByProductID = (req, res) => {
    const { productID } = req.params;

    fashionKidsItemDetailsModel.findOne({ productID })
        .then((fashion_kids_det_prodID) =>
            res.status(200).json({ fashion_kids_det_prodID: fashion_kids_det_prodID }))
        .catch(err => {
            res.status(400).json({ error_Message: err })
        }
        )
}

exports.getKidsTopDeals = (req, res) => {
    fashionKidsCollectionsModel.find({ price: { $exists: true }, price: { $ne: null } }).sort({ price: 1 }).limit(5)
        .then((kids_deals) =>
            res.status(200).json({ kids_deals: kids_deals }))
        .catch(err => {
            res.status(400).json({ error_Message: err })
        }
        )
}

exports.getFashionKidsCollectionsByFilter = (req, res) => {

    let { prime, lcost, hcost, lrating, hrating, sort, fashion_id_kids } = req.body;
    sort = sort ? sort : 1;


    const filterObj = {};
    prime && (filterObj["has_prime"] = prime);
    fashion_id_kids && (filterObj["fashion_id_kids"] = fashion_id_kids);
    lcost && hcost && (filterObj["price"] = { $gte: lcost, $lte: hcost });
    lrating && hrating && (filterObj["stars"] = { $gte: lrating, $lt: hrating });
    console.log('obj', filterObj);
    fashionKidsCollectionsModel.find(filterObj).sort({ price: sort })
        .then((fashionkids_collection_fillter) => {
            console.log(fashionkids_collection_fillter);
            res.status(200).json({ fashionkids_collection_fillter: fashionkids_collection_fillter });
        })

        .catch(err => {
            res.status(400).json({ error_Message: err })
        }
        )
}