const mongoose = require('mongoose');
const mongoosePaginate = require ('mongoose-paginate-v2')

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
    type: Number,
    required: true,
  },
  acessorios:{
    type: Array,
    required: true,
    descricao:[{
      type: String,
      required:true
    }]
  },
  quantidadePassageiros: {
    type: Number,
    required: true,
  },

}, {
    timestamps: true,
    
})

Cars.plugin(mongoosePaginate);

module.exports = mongoose.model('cars', Cars);


//descricao: {
  //  type: mongoose.Schema.Types.ObjectId,
   // ref:"descricao",
   // required: true,
 // },
