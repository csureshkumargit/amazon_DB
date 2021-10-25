const userOrderItemModel = require('../Model/order/order');

exports.getUserOrderHistory = (req, res) => {
    const { username } = req.params;
    console.log('usrame', typeof username);
    userOrderItemModel.find({ username: username }).sort({ createdAt: -1 }).limit(5)
        .then((user_order_history) =>
            res.status(200).json({ user_order_history: user_order_history, message: "order received Successfuy" }))
        .catch(err => {
            res.status(400).json({ error_Message: err, message: "order not received Successfuy" })
        }
        )
}
exports.addUserOrder = (req, res) => {
    const { username, items } = req.body;
    const neworder = new userOrderItemModel({ username, items });
    console.log('order', neworder);

    neworder.save()
        .then((user_order_detail) =>
            res.status(200).json({ user_order_detail: user_order_detail, message: "order saved successfully" }))
        .catch(err => {
            res.status(400).json({ error_Message: err, message: "order not saved Successfuy" })
        }
        )
}
