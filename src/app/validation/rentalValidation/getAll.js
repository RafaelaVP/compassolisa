const Joi = require('joi');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      nome: Joi.string(),
      cnpj: Joi.string().min(14).max(18),
      atividades: Joi.string(),
      endereco: Joi.array()
        .unique()
        .min(1)
        .items({
          cep: Joi.string().min(1),
          logradouro: Joi.string().min(1),
          complemento: Joi.string().min(1),
          bairro: Joi.string().min(1),
          number: Joi.string().min(1),
          localidade: Joi.string().min(1),
          uf: Joi.string().min(1)
        })
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
