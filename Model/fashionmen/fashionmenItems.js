const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const fashionMenItemSchema = new Schema({
    fashionMen: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    fashion_id_men: {
        type: Number,
        required: true
    }
}, {
    collection: 'FashionMen',
    versionKey: false //here
});

module.exports = mongoose.model('FashionMen', fashionMenItemSchema, 'FashionMen');

