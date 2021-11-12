const tempOrderItemModel = require('../Model/tempOrders/tempOrders');

exports.getUserRecentTempTransaction = (req, res) => {
    const { username } = req.params;
    console.log('usrame', typeof username);
    tempOrderItemModel.findOne({ username: username })
        .then((user_temp_order) =>
            res.status(200).json({ user_temp_order: user_temp_order, message: "temp order received Successfuy" }))
        .catch(err => {
            res.status(400).json({ error_Message: err, message: "temp order not received Successfuy" })
        }
        )
}
exports.addUserRecentTempTransaction = (req, res) => {
    const { username, items } = req.body;
    const newtemporder = new tempOrderItemModel({ username, items });
    console.log('order', newtemporder);

    newtemporder.save()
        .then((user_temp_order_detail) =>
            res.status(200).json({ user_temp_order_detail: user_temp_order_detail, message: "temp order saved successfully" }))
        .catch(err => {
            res.status(400).json({ error_Message: err, message: "temp order not saved Successfuy" })
        }
        )
}

exports.removeUserRecentTempTransaction = (req, res) => {
    const { username } = req.params;
    console.log('usrame', typeof username);
    tempOrderItemModel.findOneAndRemove({ username: username })
        .then((user_temp_order) =>
            res.status(200).json({ user_temp_order: user_temp_order, message: "temp order deleted Successfuy" }))
        .catch(err => {
            res.status(400).json({ error_Message: err, message: "temp order not deleted Successfuy" })
        }
        )
}
