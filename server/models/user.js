let mongoose = require('mongoose'),
  Schema = mongoose.Schema;
let findOrCreate = require('mongoose-findorcreate');
let autoIncrement = require('./autoIncrement')
var bcrypt = require("bcryptjs")

let UserSchema = new Schema({
  name: String,
  username: {type: String, default: 'abc@gmail.com'},
  provider: String,
  uid: String,
  accessToken: String,
  member: {type: String, default: 'none'},
  mustConfirmEmail: {type: Boolean, default: true},
  password: String,
  role: {type: [String], default: ['student']},
  info: {
    start: Date,
    end: Date
  },
  createAt: {type: Date, default: Date.now}
});

UserSchema.plugin(findOrCreate);

UserSchema.plugin(autoIncrement.plugin, 'User')

let User = mongoose.model('User', UserSchema)

module.exports = User

module.exports.getUserByEmail = function(username, callback){
  User.find({username: username}, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    if(err) console.log(err);
    callback(null, isMatch);
  });
}

module.exports.createUser = function(newUser, callback){
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newUser.password, salt, function(err, hash) {
      newUser.password = hash;
      User.create(newUser, callback)
    });
  });
}

module.exports.changePassword = function(email, password, callback){
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(password, salt, function(err, hash) {
      if(err) throw err
      console.log(hash)
      User.update({username: email}, {$set: {password: hash}}, callback)
    });
  });
}
