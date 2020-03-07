const express = require('express')
const router = express.Router()

const QuizAnswer = require('../models/QuizAnswer')

router.get('/wakeup', async (req, res, next) => {
  const now = Date.now(new Date())
  let dbStatus
  try {
    dbStatus = await QuizAnswer.find().lean()
  } catch (e) {
    console.error('Error from db: ', JSON.stringify(e))
    res.status(400).json({
      message: `Something went wrong: ${JSON.stringify(e)}`,
    })
  }
  const message = `${now}: Server status: OK --- Database status: ${!dbStatus &&
    'NOT'} OK`

  res.status(200).json({
    message,
  })
})

router.get('/statistics', async (req, res, next) => {
  const now = Date.now(new Date())
  let statistics

  try {
    statistics = await QuizAnswer.find().lean()
  } catch (e) {
    console.error('error:', e)
    res.status(400).json({
      message: `Something went wrong: ${JSON.stringify(e)}`,
    })
  }

  res.status(200).json({
    statistics,
  })
})

router.post('/saveAnswers', async (req, res, next) => {
  const now = Date.now(new Date())
  console.log(req.body, 'req.body')
  // validate information
  // get country and continent from ip

  const data = {
    dateCompleted: now,
    country: '',
    continent: '',
    score: 0,
    title: '',
    answers: {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
    },
  }
  const answer = new QuizAnswer(data)
  answer.save().then(dbResult => console.log(dbResult, 'dbResult'))

  const message = 'Success, your stats has been posted!'
  res.status(200).json({
    message,
  })
})

module.exports = router
