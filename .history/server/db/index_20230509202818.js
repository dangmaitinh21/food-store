const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://rynerlelouch:123456789abc@cluster0.a9mhtg6.mongodb.net/',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .catch((e) => console.error('Connection error', e.message));

const db = mongoose.connection;

module.exports = db;
