const mongose = require('mongoose');

const User = mongose.Schema({
  email: {
    type: String,
    unique: true,
    require: true
  },
  name: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongose.model('user', User);
