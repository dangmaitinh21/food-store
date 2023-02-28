const dbName = 'food-store';
const dbHost = 'localhost';
const dbPort = 27017;
module.exports = {
  url: `mongoDB://${dbHost}:${dbPort}/${dbName}`,
};
