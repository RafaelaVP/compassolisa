/* eslint-disable no-return-await */
const setupDB = require('./support/cleanDatabase');
const connection = require('../src/infra/database/connectionMongo');

global.beforeAll(async () => await connection);
global.afterEach(async () => await setupDB());
global.afterAll(async () => await connection.disconnect());
