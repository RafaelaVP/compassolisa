const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const bcrypt = require('bcryptjs');

const Clients = mongoose.Schema(
  {
    nome: {
      type: String,
      required: true
    },
    cpf: {
      type: String,
      required: true,
      unique: true
    },
    data_nascimento: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      trim: true
    },
    senha: {
      type: String,
      required: true,
      select: false
    },
    habilitado: {
      type: String,
      enum: ['sim', 'não'],
      required: true
    }
  },
  {
    timestamps: false
  }
);

Clients.pre('save', async function encrypted(next) {
  const hash = await bcrypt.hash(this.senha, 10);
  this.senha = hash;

  next();
});

Clients.plugin(mongoosePaginate);

module.exports = mongoose.model('user', Clients);
