const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const electronicsItemSchema = new Schema({
    electronics: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    electronics_id: {
        type: Number,
        required: true
    }
}, {
    collection: 'Electronics',
    versionKey: false //here
});

module.exports = mongoose.model('Electronics', electronicsItemSchema, 'Electronics');

