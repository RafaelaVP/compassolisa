const jwt = require('jsonwebtoken');
const AuthRepository = require('../repository/AuthRepository');
const secret = require('../../helper/jwt');

class AuthService {
  async validate(payload) {
    const user = await AuthRepository.findByEmail(payload);
    if (user && user.senha === payload.senha && user.habilitado === 'sim') {
      const usercredentials = { email: user.email, id: user.id, habilitado: user.habilitado };
      const token = jwt.sign(usercredentials, secret.secret, { expiresIn: 86400 });
      return { token };
    }
    return null;
  }
}
module.exports = new AuthService();
