let mongoose = require('mongoose'),
  Schema = mongoose.Schema;
let findOrCreate = require('mongoose-findorcreate');
let autoIncrement = require('./autoIncrement')

let VideoSchema = new Schema({
  stt: {type: Number},
  courseId: {type: Number},
  section: {type: Number},
  name: {type: String},
  link: {type: String},
  url: {type: String},
  source: {type: String},
  time: {type: Number}
}, { collection: 'video'});

VideoSchema.plugin(autoIncrement.plugin, 'Video')

let Video = mongoose.model('Video', VideoSchema)

module.exports = Video
