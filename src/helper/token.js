const jwt = require('jsonwebtoken');
const secret = require('./jwt');

module.exports = function clientToken(senha) {
  const token = jwt.sign(senha, secret);
  return token;
};
