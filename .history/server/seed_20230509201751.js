const { faker } = require('@faker-js/faker');
const MongoClient = require('mongodb').MongoClient;
const _ = require('lodash');

async function main() {
  const uri =
    'mongodb+srv://rynerlelouch:123456abc@cluster0.a9mhtg6.mongodb.net/?retryWrites=true&w=majority';
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const productsCollection = client.db('food-store').collections('products');
    const categoriesCollection = client
      .db('food-store')
      .collections('categories');

    let categories = ['breakfast', 'lunch', 'dinner', 'drinks'].map(
      (category) => {
        return { name: category };
      }
    );
    await categoriesCollection.insertMany(categories);

    let imageUrls = [
      'https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/1_mfgcb5.png',
      'https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/2_afbbos.png',
      'https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/3_iawvqb.png',
    ];

    let products = [];
    for (let i = 0; i < 10; i += 1) {
      let newProduct = {
        name: faker.commerce.productName(),
        adjective: faker.commerce.productAdjective(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        category: _.sample(categories),
        imageUrl: _.sample(imageUrls),
      };
      products.push(newProduct);
    }
    await productsCollection.insertMany(products);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

main();
