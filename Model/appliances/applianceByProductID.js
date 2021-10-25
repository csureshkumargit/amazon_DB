const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appliancesDetailsSchema = new Schema({
    productID: {
        type: String,
        required: true
    }
}, {
    collection: 'itemDetailHomeAppliances',
    versionKey: false //here
});

module.exports = mongoose.model('itemDetailHomeAppliances', appliancesDetailsSchema, 'itemDetailHomeAppliances');