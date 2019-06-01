const mongoose = require('mongoose');

const Question = mongoose.Schema({
  question: {
    type: String,
    require: true
  },
  answers: {
    type: [String],
    require: true
  },
  right: {
    type: [Number],
    default: []
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Question;
