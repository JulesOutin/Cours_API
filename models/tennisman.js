const mongoose = require('mongoose');

const tennismanSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    ranking: {
        type: Number,
        required: true
    },
    titles: {
        type: Number,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Tennisman', tennismanSchema);