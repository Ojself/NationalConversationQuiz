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
  const data = calculateData(statistics)

  res.status(200).json({
    totalResult: data[0],
    dividedResult: data[1],
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
    continent: 'Europe',
    answers,
  }
  const answer = new QuizAnswer(data)
  answer.save().then(dbResult => console.log(dbResult, 'dbResult'))

  const message = 'Success, your stats has been posted!'
  res.status(201).json({
    message,
  })
})

const calculateData = dataset => {
  const totalResult = [0, 0, 0]
  const dividedResult = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]
  for (let i = 0; i < dataset.length; i++) {
    dataset[i].answers.forEach((a, j) => {
      console.log(i, a, 'a')
      switch (a) {
        case 0:
          totalResult[0] += 1
          dividedResult[j][0] += 1
        case 1:
          totalResult[1] += 1
          dividedResult[j][1] += 1
        case 2:
          totalResult[2] += 1
          dividedResult[j][2] += 1
        default:
          console.error('oops')
      }
    })
  }
  console.log(totalResult, dividedResult)
  return [totalResult, dividedResult]
}

module.exports = router
