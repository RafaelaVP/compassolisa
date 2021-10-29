const mongoose = require('mongoose');
const mongoosePaginate = require ('mongoose-paginate-v2')


const Clients = mongoose.Schema({
    nome: {
     type: String,
     required: true,
    },
    cpf:{
     type:String,
     required:true,
     unique:true
    },
     data_nascimento:{
     type: String,
     required:true
    },
    email:{
     type:String,
     required:true,
     unique:true,
     lowercase:true,
     trim:true
    },
    senha:{
     type:String,
     required:true,
     select:false,
     
    },
    habilitado:{
    type:String,
    enum:["sim","não"],
    default:"sim",

    }
}, {
  timestamps: false,
});

Clients.plugin(mongoosePaginate);


module.exports = mongoose.model('user',Clients);
