const mongoose = require('mongoose');
const env = require('dotenv').config({ path: '../.env' });

mongoose
  .connect(
    `mongodb+srv://${process.env.VITE_DB_USERNAME}:${process.env.VITE_DB_PASSWORD}@${process.env.VITE_DB_HOST}/`,
    { useNewUrlParser: true, dbName: `${process.env.VITE_DB_NAME}` }
  )
  .catch((e) => console.error('Connection error', e.message));

const db = mongoose.connection;

module.exports = db;
