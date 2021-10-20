const conectdb = require('../../infra/database/connectionMongo.js');
const mongoose = require('mongoose') 


const Cars = mongoose.Schema({
    modelo: {
      type: String,
      required: true
    },
    cor: {
      type: String,
      required: true
    },
    ano:{
        type:Date,
        required:true
    },
    acessorios:{
        type:String,
        required:true
    },
    descricao:{
        type:String,
        required:true
    },
    quantidadePassageiros:{
        type:Number,
        required:true
    }
  }, {
    timestamps: true
  })

  module.exports = mongoose.model('cars' , Cars)
 