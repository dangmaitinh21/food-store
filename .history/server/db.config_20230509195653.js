const dbName = 'food-store';
const dbHost = 'cluster0.a9mhtg6.mongodb.net';
const dbPort = 27017;
module.exports = {
  url: `mongoDB://${dbHost}:${dbPort}/${dbName}`,
};
