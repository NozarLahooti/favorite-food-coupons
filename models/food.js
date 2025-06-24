const mongoose = require('mongoose');

const foodSch = new mongoose.Schema({
    name: { type: String, require: true},
    category: {type : String}
});

module.exports = mongoose.model('Food', foodSch)