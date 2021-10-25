const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fashionkidsItemDetailsSchema = new Schema({
    productID: {
        type: String,
        required: true
    }
}, {
    collection: 'itemDetailFashionKids',
    versionKey: false //here
});

module.exports = mongoose.model('itemDetailFashionKids', fashionkidsItemDetailsSchema, 'itemDetailFashionKids');