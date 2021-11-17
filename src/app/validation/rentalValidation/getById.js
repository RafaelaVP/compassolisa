const Joi = require('joi');

module.exports = async (req, res, next) => {
  try {
    const schema = Joi.object({
      id: Joi.string().min(24).max(24).pattern(new '^[a-fA-F0-9]'())
    });

    const { error } = await schema.validate(req.params, { abortEarly: false });
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
