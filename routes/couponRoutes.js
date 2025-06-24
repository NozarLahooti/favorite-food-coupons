const express = require('express');
const router = express.Router();
const Coupon = require('../models/coupon');

// GET all coupons
router.get('/', async (req, res) => {
  try {
    const coupons = await Coupon.find().populate('foodId');
    res.json(coupons);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET one coupon by ID
router.get('/:id', async (req, res) => {
  try {
    const coupon = await Coupon.findById(req.params.id).populate('foodId');
    res.json(coupon);
  } catch (err) {
    res.status(404).json({ error: 'Coupon not found' });
  }
});

module.exports = router;
