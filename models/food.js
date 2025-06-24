const mongoose = require('mongoose');

const foodSch = new mongoose.Schema({
    name: { type: String, require: true},
    category: {type : String}
});

