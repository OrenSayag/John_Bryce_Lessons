const { Schema, model } = require('mongoose')

const productSchema = new Schema({
  price: {
    type:   Number,
    required: true
  },
  name:{
    type: String,
    required:true,
  },
  discount: {
    type: Boolean,
    default: false
  },
  added:{
    type: Date,
    default: Date.now
  }

})

const Products = model('products', productSchema)


module.exports = Products