let mongoose = require('mongoose'),
  Schema = mongoose.Schema;
let autoIncrement = require('./autoIncrement')
const ImageSchema = require('./image').schema;

let CategorySchema = new Schema({
  name: String,
  cover: ImageSchema,
  slug: String,
  description: String
}, { collection: 'category'});

CategorySchema.plugin(autoIncrement.plugin, 'Category')

let Category = mongoose.model('Category', CategorySchema)

module.exports = Category
