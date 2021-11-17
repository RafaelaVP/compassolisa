const AuthService = require('../service/AuthService');

class AuthController {
  async find(req, res) {
    try {
      const { email, senha } = req.body;
      const token = await AuthService.validate({ email, senha });
      return res.status(200).send(token);
    } catch (error) {
      return res.status(400).json({
        message: 'no exist'
      });
    }
  }

  async auth(req, res) {
    try {
      const { authorization } = req.headers;
      const valideToken = await AuthService.authorization(authorization);
      return res.status(200).send(valideToken);
    } catch (error) {
      return res.status(400).json({
        message: 'no authorization'
      });
    }
  }
}

module.exports = new AuthController();
