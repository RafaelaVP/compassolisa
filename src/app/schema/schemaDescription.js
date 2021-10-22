const mongoose = require('mongoose');

const Description = mongoose.Schema({
  descricao: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('descricao',Description);
