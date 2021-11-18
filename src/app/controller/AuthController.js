const AuthService = require('../service/AuthService');

class AuthController {
  async auth(req, res) {
    try {
      const { email, senha } = req.body;
      const token = await AuthService.validate({ email, senha });
      return res.status(200).send(token);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new AuthController();
