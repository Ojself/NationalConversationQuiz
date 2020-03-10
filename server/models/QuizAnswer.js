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

  answers: {
    type: Array,
    default: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
})

const QuizAnswer = mongoose.model('QuizAnswer', quizAnswerSchema)

module.exports = QuizAnswer
