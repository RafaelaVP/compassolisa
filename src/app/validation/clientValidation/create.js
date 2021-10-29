const Joi = require('joi');
const cpf = require('cpf-cnpj-validator')

module.exports = async(req, res, next) => {
    try {
        const schema = Joi.object({
            nome:Joi.string()
              .min(4)
              .max(10)
              .required(), 
            cpf: Joi.string().min(14).max(14).required(),
            data_nascimento:Joi.string(),
            email:Joi.string(),//.email({ minDomainSegments: 2, tlds: { allow: ['com'] } }),
            senha:Joi.string().min(6).required(),
            
        });
        //const num = cpf.generate();

        const{error} = await schema.validate(req.body,{abortEarly:false});
        if(error) throw error  
        return next()
    } catch (error) {
        return res.status(400).json(error)        
    }
}