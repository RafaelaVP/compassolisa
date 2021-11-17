const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const Cars = mongoose.Schema(
  {
    modelo: {
      type: String,
      required: true,
      trim: true
    },
    cor: {
      type: String,
      required: true,
      trim: true
    },
    ano: {
      type: Number,
      required: true
    },
    acessorios: [
      {
        _id: { type: mongoose.Schema.ObjectId, auto: true, unique: true, required: true },
        descricao: {
          type: String,
          required: true
        }
      }
    ],
    quantidadePassageiros: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

Cars.plugin(mongoosePaginate);

module.exports = mongoose.model('cars', Cars);
