const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fashionwomenItemDetailsSchema = new Schema({
    productID: {
        type: String,
        required: true
    }
}, {
    collection: 'itemDetailFashionWomen',
    versionKey: false //here
});

module.exports = mongoose.model('itemDetailFashionWomen', fashionwomenItemDetailsSchema, 'itemDetailFashionWomen');