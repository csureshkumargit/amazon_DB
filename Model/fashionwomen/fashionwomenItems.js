const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const fashionWomenItemSchema = new Schema({
    fashionWomen: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    fashion_id_women: {
        type: Number,
        required: true
    }
}, {
    collection: 'FashionWomen',
    versionKey: false //here
});

module.exports = mongoose.model('FashionWomen', fashionWomenItemSchema, 'FashionWomen');

