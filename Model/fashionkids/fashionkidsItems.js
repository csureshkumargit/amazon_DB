const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const fashionKidsItemSchema = new Schema({
    fashionKids: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    fashion_id_kids: {
        type: Number,
        required: true
    }
}, {
    collection: 'FashionKids',
    versionKey: false //here
});

module.exports = mongoose.model('FashionKids', fashionKidsItemSchema, 'FashionKids');

