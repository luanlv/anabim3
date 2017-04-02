let mongoose = require('mongoose'),
  Schema = mongoose.Schema;
let autoIncrement = require('./autoIncrement')

let CouponSchema = new Schema({
  code: String,
  kind: Number,
  price: Number,
  month: [Number],
  active: Boolean,
  quantity: Number,
  endTime: Date
}, { collection: 'coupon'});

CouponSchema.plugin(autoIncrement.plugin, 'Coupon')

let Coupon = mongoose.model('Coupon', CouponSchema)

module.exports = Coupon
