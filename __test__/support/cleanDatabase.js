/* eslint-disable no-restricted-syntax */
const database = require('../../src/infra/database/connectionMongo');

const cleanDatabase = async () => {
  const db = await database;
  for (const collection of Object.keys(db.connection.collections)) {
    db.connection.collections[collection].deleteMany({});
  }
};

module.exports = cleanDatabase;
