const express = require('express');
const router = express.Router();
const Food = require('../models/food');  


router.get('/', async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    res.json(food);
  } catch (err) {
    res.status(404).json({ error: 'Food not found' });
  }
});


router.post('/', async (req, res) => {
  try {
    const newFood = await Food.create({
      name: req.body.name,
      category: req.body.category    
    });
    res.status(201).json(newFood);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;  
