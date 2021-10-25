const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fashionmenItemDetailsSchema = new Schema({
    productID: {
        type: String,
        required: true
    }
}, {
    collection: 'itemDetailFashionMen',
    versionKey: false //here
});

module.exports = mongoose.model('itemDetailFashionMen', fashionmenItemDetailsSchema, 'itemDetailFashionMen');