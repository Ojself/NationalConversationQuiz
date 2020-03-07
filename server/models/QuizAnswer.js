const mongoose = require('mongoose')

const quizAnswerSchema = new mongoose.Schema({
  dateCompleted: {
    type: Date,
    default: new Date(Date.now()),
  },
  country: {
    type: String,
    default: 'Germany',
  },
  continent: {
    type: String,
    default: 'Europe',
  },
  score: {
    type: Number,
    default: 0,
  },
  title: {
    type: String,
    default: 'Worship',
    enum: ['Worship', 'Avoidance', 'Vigilance', 'Status'],
  },
  answers: {
    type: Object,
    default: {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
    },
  },
})

const QuizAnswer = mongoose.model('QuizAnswer', quizAnswerSchema)

module.exports = QuizAnswer
