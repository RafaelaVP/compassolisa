const mongoose = require('mongoose');

const Reserves = mongoose.Schema(
  {
    id_user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Clients',
      required: true
    },
    data_inicio: {
      type: String,
      required: true
    },
    data_fim: {
      type: String,
      required: true
    },
    id_locadora: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Rental',
      required: true
    },
    id_carro: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Cars',
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('reserve', Reserves);
