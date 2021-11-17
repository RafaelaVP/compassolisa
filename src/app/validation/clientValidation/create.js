const Joi = require('joi');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      nome: Joi.string().min(4).max(50).required(),
      cpf: Joi.string().min(11).max(14).required(),
      data_nascimento: Joi.string(),
      email: Joi.string(),
      senha: Joi.string().min(6).required(),
      habilitado: Joi.string()
    });
    const { error } = await schema.validate(req.body, { abortEarly: false });
    if (error) throw error;
    return next();
  } catch (error) {
    return res.status(400).json(
      error.details.map((detail) => ({
        description: detail.message,

        name: detail.path.join('.')
      }))
    );
  }
};
