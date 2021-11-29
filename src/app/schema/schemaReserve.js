const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const Reserves = mongoose.Schema(
  {
    id_user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Clients',
      required: true
    },
    data_inicio: {
      type: Date,
      required: true
    },
    data_fim: {
      type: Date,
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
    },
    valor_final: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);
Reserves.plugin(mongoosePaginate);
module.exports = mongoose.model('reserve', Reserves);
