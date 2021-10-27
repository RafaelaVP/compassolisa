const AuthRepository = require('../repository/AuthRepository');
const secret = require('../../helper/jwt');
const jwt = require('jsonwebtoken');
const token = require('../../helper/token');

class AuthService {
    async validateEmail(payload) {
        const user = await AuthRepository.findByEmail(payload)
        if(user && user.senha === payload.senha && user.habilitado === "sim") {
            const payload = {email:user.email, id:user.id}
             const token = jwt.sign(payload, secret.secret, {expiresIn:3600})
             return {token:token}
        } 
        return null
    }
     async authorization(authorization)  {
        const separa = authorization.replace('Bearer ', '')
        const resign = jwt.verify(separa, secret.secret)
        const {email, id} = resign
    }
  
   
}
module.exports = new AuthService();


