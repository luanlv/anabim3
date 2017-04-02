let mongoose = require('mongoose'),
  Schema = mongoose.Schema
let autoIncrement = require('./autoIncrement')
const Coupon = require('./coupon').schema;

let SubscribeSchema = new Schema({
  done: {type: Boolean, default: false},
  state: {type: String, default: 'pending'},
  email: String,
  name: String,
  phone: String,
  month: Number,
  bonusDay: {type: Number, default: 0},
  price: Number,
  info: String,
  coupon: Coupon,
  createAt: {type: Date, default: Date.now}
},  { collection: 'subscribe'})

SubscribeSchema.plugin(autoIncrement.plugin, 'Subscribe')

let Subscribe = mongoose.model('Subscribe', SubscribeSchema)
