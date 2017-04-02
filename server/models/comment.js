let mongoose = require('mongoose'),
  Schema = mongoose.Schema;
let autoIncrement = require('./autoIncrement')

let CommentSchema = new Schema({
  kind: String,
  parentID: Number,
  users: [Number],
  comment: String,
  userId: String,
  time: Date,
  children: []
}, { collection: 'comment'});

CommentSchema.plugin(autoIncrement.plugin, 'Comment')

let Comment = mongoose.model('Comment', CommentSchema )

module.exports = Comment
