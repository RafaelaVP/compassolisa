const Joi = require('joi');

module.exports = async(req, res, next) => {
    try {
        const schema = Joi.object({
            nome:Joi.string()
              .min(4)
              .max(50)
              .required(), 
            cpf: Joi.string().min(11).max(14).required(),
            data_nascimento:Joi.string(),
            email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com'] } }),
            senha:Joi.string().min(6).required(),
            habilitado: Joi.string()

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
