const mongoose = require('mongoose');

const imgschema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please enter social media name']
    },
    
    url: {
        type: String,
        required: [true, 'please enter social media url'],
    }
})

module.exports = imgschema;