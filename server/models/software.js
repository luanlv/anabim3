let mongoose = require('mongoose'),
  Schema = mongoose.Schema;
let autoIncrement = require('./autoIncrement')
const ImageSchema = require('./image').schema

let SoftwareSchema = new Schema({
  name: String,
  slug: String,
  cover: ImageSchema,
}, { collection: 'software'});

SoftwareSchema.plugin(autoIncrement.plugin, 'Software')

let Software = mongoose.model('Software', SoftwareSchema)

module.exports = Software
