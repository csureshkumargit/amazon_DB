const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mobileBrandSchema = new Schema({
    mobile: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    mobile_id: {
        type: Number,
        required: true
    }
}, {
    collection: 'mobile',
    versionKey: false //here
});

module.exports = mongoose.model('mobile', mobileBrandSchema, 'Mobile');

