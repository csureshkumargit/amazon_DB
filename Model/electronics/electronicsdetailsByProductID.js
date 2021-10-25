const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const electronicsItemDetailsSchema = new Schema({
    productID: {
        type: String,
        required: true
    }
}, {
    collection: 'itemDetailElectronics',
    versionKey: false //here
});

module.exports = mongoose.model('itemDetailElectronics', electronicsItemDetailsSchema, 'itemDetailElectronics');