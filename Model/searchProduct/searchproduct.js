const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const searchProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },

}, {
    collection: 'searchProduct',
    versionKey: false //here
});

module.exports = mongoose.model('searchProduct', searchProductSchema, 'searchProduct');

