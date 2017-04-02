let mongoose = require('mongoose'),
  Schema = mongoose.Schema;

let SessionSchema = new Schema({
  session: String,
  expires: Date
}, {collection: 'sessions', strict: false});

let Session = mongoose.model('Session', SessionSchema)

module.exports = Session
