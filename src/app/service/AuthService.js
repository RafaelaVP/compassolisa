const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const AuthRepository = require('../repository/AuthRepository');
const secret = require('../../helper/jwt');

class AuthService {
  async validate(payload) {
    const user = await AuthRepository.findByEmail(payload);
    if (!user) throw Error('cliente não encontrado');
    const checkPassword = await bcrypt.compare(payload.senha, user.senha);
    if (!checkPassword) throw Error('Senha inválida');
    if (user.habilitado === 'não') throw Error(' cliente não habilitado');

    const usercredentials = { email: user.email, id: user.id, habilitado: user.habilitado };
    const token = jwt.sign(usercredentials, secret.secret, { expiresIn: 86400 });
    return { token };
  }
}
module.exports = new AuthService();
