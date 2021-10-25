const customercareModel = require('../Model/customercare/customercare');

exports.getCustomerCareDetail = (req, res) => {
    customercareModel.findOne()
        .then((customer_care_details) =>
            res.status(200).json({ customer_care_details: customer_care_details }))
        .catch(err => {
            res.status(400).json({ error_Message: err, message: "order not received Successfuy" })
        }
        )
}