const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const customercareSchema = new Schema({
    Customercare: {
        type: String,
        required: true
    }
}, {
    collection: 'customercare',
    versionKey: false //here
});

module.exports = mongoose.model('customercare', customercareSchema, 'customercare');

