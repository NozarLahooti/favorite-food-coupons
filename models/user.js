const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    favoriteCoupans: [{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Coupon'
    }]
});

module.exports = mongoose.model('User', userSchema);