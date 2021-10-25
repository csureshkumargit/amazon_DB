const mongoose = require('mongoose');
//import { mongoose } from mongoose;
const Schema = mongoose.Schema;
const userRegistartionSchema = new Schema(
    {
        username: {
            type: String,
            min: 6,
            max: 255,
            required: false
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        collection: 'users',
        versionKey: false //here
    }

);

module.exports = mongoose.model('users', userRegistartionSchema, 'users');

