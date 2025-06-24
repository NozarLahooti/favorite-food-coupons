const mangoose = require('mongoose');

const couponSchema = new mongoose.Schema({
    code:{ type: String, required: true, unique: true},
    
})