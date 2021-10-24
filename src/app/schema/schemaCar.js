const mongoose = require('mongoose');

const Cars = mongoose.Schema({
    modelo: {
    type: String,
    required: true,
  },
  cor: {
    type: String,
    required: true,
  },
  ano: {
    type: String,
    required: true,
  },
  acessorios:{
    type: Array,
    required: true,
  },
  quantidadePassageiros: {
    type: Number,
    required: true,
  },

}, {
    timestamps: true,
});

module.exports = mongoose.model('cars', Cars);


//descricao: {
  //  type: mongoose.Schema.Types.ObjectId,
   // ref:"descricao",
   // required: true,
 // },
