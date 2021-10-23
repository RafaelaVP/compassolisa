const mongoose = require('mongoose');

const Clients = mongoose.Schema({
    nome: {
     type: String,
     required: true,
    },
    cpf:{
     type:String,
     required:true
    },
    data_nascimente:{
     type: Date,
     required:true
    },
    email:{
     type:String,
     required:true
    },
    senha:{
     type:String,
     required:true
    },
    habilitado:{
     type:String,
     required:true
    }
}, {
  timestamps: true,
});

module.exports = mongoose.model('clients',Clients);
