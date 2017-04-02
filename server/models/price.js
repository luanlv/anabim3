let mongoose = require('mongoose'),
  Schema = mongoose.Schema;
let autoIncrement = require('./autoIncrement')

let PriceSchema = new Schema({
  one: Number,
  three: Number,
  six: Number,
  twelve: Number
}, { collection: 'price'});

PriceSchema.plugin(autoIncrement.plugin, 'Price')

let Price = mongoose.model('Price', PriceSchema)

module.exports = Price
