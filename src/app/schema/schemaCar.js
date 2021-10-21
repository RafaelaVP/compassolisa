const mongoose = require('mongoose')


const Cars = mongoose.Schema({
    model: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    year:{
        type: String,
        required: true
    },
    accessories:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    numberOfPassengers:{
        type:Number,
        required:true
    }
  }, {
    timestamps: true
  })

  module.exports = mongoose.model('cars' , Cars)
