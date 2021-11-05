const Joi = require('joi');

module.exports = async(req, res, next) => {
    try {
        const schema = Joi.object({
            nome:Joi.string()
              .min(4)
              .max(50),
               
            cpf: Joi.string().min(11).max(14),
            data_nascimento:Joi.string(),
            email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com'] } }),
            senha:Joi.string().min(6),
            habilitado: Joi.string.min(3).max(3)
            
        });

        const{error} = await schema.validate(req.body,{abortEarly:false});
        if(error) throw error  
        return next()
    } catch (error) {
        return res.status(400).json(error)        
    }
}