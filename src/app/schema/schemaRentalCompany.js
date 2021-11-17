const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const Rental = mongoose.Schema(
  {
    nome: {
      type: String,
      required: true
    },
    cnpj: {
      type: String,
      required: true,
      unique: true
    },
    atividades: {
      type: String,
      required: true
    },
    endereco: [
      {
        cep: {
          type: String
        },
        logradouro: {
          type: String,
          required: true
        },
        complemento: {
          type: String
        },
        bairro: {
          type: String,
          required: true
        },
        number: {
          type: String,
          required: true
        },
        localidade: {
          type: String,
          required: true
        },
        uf: {
          type: String,
          required: true
        },
        isFilial: {
          type: Boolean,
          required: true
        }
      }
    ]
  },
  {
    timestamps: false
  }
);

Rental.plugin(mongoosePaginate);

module.exports = mongoose.model('rental', Rental);
