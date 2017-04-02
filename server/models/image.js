let mongoose = require('mongoose'),
  Schema = mongoose.Schema;
let autoIncrement = require('./autoIncrement')

let ImageSchema = new Schema({
  filename: String,
  contentType: String,
  path: String,
  createAt: Date
}, { collection: 'image'});

ImageSchema.plugin(autoIncrement.plugin, 'Image')

let Image = mongoose.model('Image', ImageSchema)

module.exports = Image
