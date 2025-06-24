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
    if (!coupon) return res.status(404).json({ error: 'Coupon not found' });
    res.json(coupon);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create a new coupon
router.post('/', async (req, res) => {
  try {
    const created = await Coupon.create({
      code: req.body.code,
      discount: req.body.discount,
      foodId: req.body.foodId,
      restaurantName: req.body.restaurantName
    });
    // The linked food
    const populated = await created.populate('foodId');
    res.status(201).json(populated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
