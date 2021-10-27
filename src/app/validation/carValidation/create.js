const Joi = require('joi');

module.exports = async(req, res, next) => {
    try {
        const schema = joi.object({
            modelo:Joi.string().required(),
            cor: Joi.string().required(),
            ano:Joi.string().required(),
            acessorios:Joi.array().items({descricao:Joi.string().required()}).required(),
            quantidadePassageiros:Joi.number().required()
        });
        const{error} = await schema.validate(req.body,{abortEarl:true});
        if(error) throw error
    } catch (error) {
        return res.status(400).json(error)
    }
}
