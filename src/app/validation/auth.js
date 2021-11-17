/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const authConfig = require('../../helper/jwt');

module.exports = (req, res, next) => {
  let token = req.headers.authorization;

  if (!token) return res.status(401).send({ error: 'no token' });
  token = token.replace('Bearer ', '');

  jwt.verify(token, authConfig.secret, (err, decoded) => {
    if (err) return res.status(401).send({ error: 'Token invalid' });
    req.userId = decoded.userId;

    return next();
  });
};
