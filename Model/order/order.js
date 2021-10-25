const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderDetailsSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    items: {
        type: Array,
        required: true
    }
}, {
    timestamps: true,
    collection: 'orders',
    versionKey: false //here
});

module.exports = mongoose.model('orders', OrderDetailsSchema, 'orders');