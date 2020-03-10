const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '../.env') })
const {
  getRandomDate,
  getRandomCountry,
  getRandomContinent,

  getRandomAnswers,
} = require('./seedHelpers')

// Seeds file that remove all existing answers and generate another 50 with random values
// only for test purposes

// $ node bin/seeds.js

const mongoose = require('mongoose')
const QuizAnswer = require('../models/QuizAnswer')
require('../configs/database')

const mockAnswers = []
for (let i = 0; i < 50; i++) {
  mockAnswers.push({
    dateCompleted: getRandomDate(),
    country: getRandomCountry(),
    /* continent: getRandomContinent(), */
    answers: getRandomAnswers(),
  })
}

QuizAnswer.deleteMany() // this will fail if db is empty
  .then(() => {
    return QuizAnswer.create(mockAnswers)
  })
  .then(answersCreated => {
    console.log(`${answersCreated.length} users created with the following id:`)
    console.log(answersCreated.map(a => a._id))
  })
  .then(() => {
    mongoose.disconnect()
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })
