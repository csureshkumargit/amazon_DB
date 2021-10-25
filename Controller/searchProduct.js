const searchProductModel = require('../Model/searchProduct/searchproduct');
exports.getProductsBySearch = (req, res) => {
    const { searchword } = req.params;
    searchProductModel.find({ "$or": [{ name: { $regex: `.*${searchword}.*`, $options: '$i' } }, { url: { $regex: `.*${searchword}.*`, $options: '$i' } }] })
        .then((searchproduct) =>
            res.status(200).json({ searchproduct: searchproduct }))
        .catch(err => {
            res.status(400).json({ error_Message: err })
        }
        )

}
