const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', async (req, res) => {
  const users = await User.find().populate('favoriteCoupons');
  res.json(users);
});

router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id).populate('favoriteCoupons');
  res.json(user);
});

module.exports = router;
