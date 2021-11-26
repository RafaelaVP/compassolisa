const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const Fleets = mongoose.Schema(
  {
    id_carro: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Cars',
      required: true
    },
    id_locadora: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Rental'
    },
    status: {
      type: String,
      enum: ['disponivel', 'alugado'],
      required: true
    },
    valor_diaria: {
      type: Number,
      required: true
    },
    placa: {
      type: String,
      required: true,
      unique: true
    }
  },
  {
    timestamps: true
  }
);

Fleets.plugin(mongoosePaginate);
module.exports = mongoose.model('fleet', Fleets);
