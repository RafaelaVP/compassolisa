const mongoose = require('mongoose');
const mongoosePaginate = require ('mongoose-paginate-v2')


const Rental = mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    cnpj:{
        type:String,
        required:true,
        unique:true
    },
    atividades:{
        type:String,
        required:true
    },
    endereco: [
        {

        }
    ]   
    
}, {
  timestamps: false,
});

Clients.plugin(mongoosePaginate);


module.exports = mongoose.model('rental',Rental);
