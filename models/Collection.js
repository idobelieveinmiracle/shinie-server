const mongoose = require('mongoose');
const Question = require('./Question');

const Collection = mongoose.Schema({
  title: {
    type: String,
    default: "No title"
  },
  questions: {
    type: [Question],
    default: []
  },
  ofUser: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('collection', Collection);
