const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
require('dotenv').config();


dotenv.config();
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB error:', err));

// Import routes
const userRoutes = require('./routes/userRoutes');
const foodRoutes = require('./routes/foodRoutes');
const couponRoutes = require('./routes/couponRoutes');

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/foods', foodRoutes);
app.use('/api/coupons', couponRoutes);

// Default home route
app.get('/', (req, res) => {
  res.send('Food Favorites API is running...');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
