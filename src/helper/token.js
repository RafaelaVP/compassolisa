const secret = require('./jwt');
const jwt = require('jsonwebtoken');

module.exports = function clientToken(senha) {
    const token = jwt.sign(senha, secret)
    return token
}