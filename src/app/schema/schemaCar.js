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
  acessorios: {
    type: String,
    required: true,
  },
  descricao: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"descricao",
    required: true,
  },
  numeroPassageiros: {
    type: Number,
    required: true,
  },

}, {
  timestamps: true,
});

module.exports = mongoose.model('cars', Cars);
