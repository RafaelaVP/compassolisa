/* eslint-disable no-return-await */
const setupDB = require('./support/cleanDatabase');

global.afterEach(async () => await setupDB());
