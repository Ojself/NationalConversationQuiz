const express = require('express')
const router = express.Router()

const QuizAnswer = require('../models/QuizAnswer')

router.get('/wakeup', async (req, res, next) => {
  const now = new Date(Date.now())
  let dbStatus
  try {
    dbStatus = await QuizAnswer.find().lean()
  } catch (e) {
    console.error('Error from db: ', JSON.stringify(e))
    res.status(400).json({
      message: `Something went wrong: ${JSON.stringify(e)}`,
    })
  }
  const message = `${now}: Server status: OK --- Database status: ${
    !dbStatus ? 'NOT' : ''
  }OK`

  res.status(200).json({
    message,
  })
})

router.get('/statistics', async (req, res, next) => {
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

  const { ip } = req // for later use
  const answers = req.body // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  console.log(ip, 'ip')

  if (!answers || answers.length < 9 || answers.length > 11) {
    // to prevent too big requests
    res.status(406).json({
      message: `Missing params`,
    })
  }
  const data = {
    dateCompleted: now,
    country: 'Germany',
    continent: '',
    answers,
  }
  const answer = new QuizAnswer(data)
  answer.save().then(dbResult => console.log(dbResult, 'dbResult'))

  const message = 'Success, your stats has been posted!'
  res.status(201).json({
    message,
  })
})

module.exports = router
