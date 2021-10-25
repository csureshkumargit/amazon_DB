const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fashionmenCollectionsSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    has_prime: {
        type: Boolean,
        required: true
    },
    is_best_seller: {
        type: Boolean,
        required: true
    },
    is_amazon_choice: {
        type: Boolean,
        required: true
    },
    is_limited_deal: {
        type: Boolean,
        required: true
    },
    stars: {
        type: Number,
        required: true
    },
    total_reviews: {
        type: Number,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    availability_quantity: {
        type: String,
        required: true
    },
    price_string: {
        type: String,
        required: true
    },
    price_symbol: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    productID: {
        type: String,
        required: true
    },
    fashion_id_men: {
        type: Number,
        required: true
    },

}, {
    collection: 'spFashionMen',
    versionKey: false //here
});

module.exports = mongoose.model('spFashionMen', fashionmenCollectionsSchema, 'spFashionMen');