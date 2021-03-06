const Joi = require('joi');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      modelo: Joi.string().required(),
      cor: Joi.string().required(),
      ano: Joi.number().required().integer().min(1950).max(2022),
      acessorios: Joi.array()
        .unique()
        .min(1)
        .items({ descricao: Joi.string().min(1).required() })
        .required(),
      quantidadePassageiros: Joi.number().min(1).required()
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
