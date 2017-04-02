let mongoose = require('mongoose'),
  Schema = mongoose.Schema;
let autoIncrement = require('./autoIncrement')

let ActiveCodeSchema = new Schema({
  code: String,
  day: Number,
  email: String,
  all: Boolean,
  quantity: Number,
  used: Boolean
}, { collection: 'activecode'});

ActiveCodeSchema.plugin(autoIncrement.plugin, 'ActiveCode')

let ActiveCode = mongoose.model('ActiveCode', ActiveCodeSchema)

module.exports = ActiveCode
