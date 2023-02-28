const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/food-store', { useNewUrlParser: true })
  .catch((e) => console.error('Connection error', e.message));
