let mongoose = require('mongoose')
  ,Schema = mongoose.Schema
let autoIncrement = require('./autoIncrement')
import uuid from 'node-uuid'

let TokenSchema = new Schema({
  token: {type: String, default: uuid.v1},
  type: String,
  email: String,
  active: {type: Boolean, default: false}
})

TokenSchema.plugin(autoIncrement.plugin, 'Token')

let Token = mongoose.model('Token', TokenSchema)

module.exports = Token
