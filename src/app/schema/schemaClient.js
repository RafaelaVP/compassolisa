const mongoose = require('mongoose');


const User = mongoose.Schema({
    nome: {
     type: String,
     required: true,
    },
    cpf:{
     type:String,
     required:true
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
  timestamps: true,
});

module.exports = mongoose.model('user',User);
