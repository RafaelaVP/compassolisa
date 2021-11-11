const Joi = require('joi');

module.exports = async(req, res, next) => {
    try {
        const schema = Joi.object({
            nome:Joi.string().required(),
            cnpj: Joi.string().min(14).max(18).required(),
            atividades:Joi.string().required(),          
            endereco:Joi.array().unique().min(1).items(
                {cep:Joi.string().min(1).required(), 
                logradouro:Joi.string().min(1).required(),
                complemento:Joi.string().min(1),
                bairro:Joi.string().min(1).required(),
                number:Joi.string().min(1).required(),
                localidade:Joi.string().min(1).required(),
                uf:Joi.string().min(1).required()
             }).required(),
            
        });

        const{error} = await schema.validate(req.body,{abortEarly:false});
        if(error) throw error  
        return next()
    } catch (error) {
        const erros = []
        const {details} = error
        details.forEach(t => {
            erros.push({
                description: t.path[0],
                name: t.message
            })
        })
        return res.status(400).json(erros)
                   
    }
}
