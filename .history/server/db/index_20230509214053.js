const mongoose = require('mongoose');

mongoose
  .connect(
    `mongodb+srv://${import.meta.env.VITE_DB_USERNAME}:${
      import.meta.env.VITE_DB_PASSWORD
    }@${import.meta.env.VITE_DB_HOST}/`,
    { useNewUrlParser: true, dbName: `${import.meta.env.VITE_DB_NAME}` }
  )
  .catch((e) => console.error('Connection error', e.message));

const db = mongoose.connection;

module.exports = db;
