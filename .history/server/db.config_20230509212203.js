// const dbName = 'food-store';
// const dbHost = 'cluster0.a9mhtg6.mongodb.net';
// const dbPort = 27017;

module.exports = {
  url: `mongodb+srv://${import.meta.env.VITE_DB_USERNAME}:${
    import.meta.env.VITE_DB_PASSWORD
  }@${import.meta.env.VITE_DB_HOST}:${import.meta.env.VITE_DB_PORT}/${
    import.meta.env.VITE_DB_NAME
  }`,
};
