const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TempOrdersDetailsSchema = new Schema({
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
    collection: 'temporders',
    versionKey: false //here
});

module.exports = mongoose.model('tempOrders', TempOrdersDetailsSchema, 'tempOrders');