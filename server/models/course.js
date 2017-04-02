let mongoose = require('mongoose'),
  Schema = mongoose.Schema;
let autoIncrement = require('./autoIncrement')
const ImageSchema = require('./image').schema;

let CourseSchema = new Schema({
  name: {type: String},
  cover: ImageSchema,
  slug: String,
  cateID: [Number],
  softID: [Number],
  level: Number,
  authorId: String,
  section: [String],
  description: String,
  vote: Number,
  numVote: Number,
  voter: [Number],
  documents: String,
  related: [Number]
}, { collection: 'course'});

CourseSchema.plugin(autoIncrement.plugin, 'Course')

let Course = mongoose.model('Course', CourseSchema)

module.exports = Course
