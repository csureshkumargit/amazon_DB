const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const applianceBrandSchema = new Schema({
    Product: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    home_appl_id: {
        type: Number,
        required: true
    }
}, {
    collection: 'HomeAppliances',
    versionKey: false //here
});

module.exports = mongoose.model('HomeAppliances', applianceBrandSchema, 'HomeAppliances');

