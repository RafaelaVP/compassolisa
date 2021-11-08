const jwt = require ('jsonwebtoken')
const authConfig = require('../../helper/jwt')
const token = require('../../helper/token');
const authorization = require('../service/AuthService')

module.exports = (req,res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader)
    return res.status(401).send({error:'no token'})

    jwt.verify(token, authConfig.secret, (err,decoded) =>{
        if(err) return res.status(401).send({error:'Token invalid'});
        req.userId= decoded.id

        return next();
    })

}