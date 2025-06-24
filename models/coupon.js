const mongoose = require('mongoose');

const couponSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  discount: { type: Number, min: 0, max: 100 },
  foodId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Food',
    required: true
  },
  restaurantName: { type: String, required: true }
});

module.exports = mongoose.model('Coupon', couponSchema);

