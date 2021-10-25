const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mobileDetailsSchema = new Schema({
    productID: {
        type: String,
        required: true
    }
}, {
    collection: 'itemDetailMobile',
    versionKey: false //here
});

module.exports = mongoose.model('itemDetailMobile', mobileDetailsSchema, 'itemDetailMobile');