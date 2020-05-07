const express = require('express')
const router = express.Router()
const axios = require('axios')
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

  return res.status(200).json({
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

  const countries = getCountriesAvailable(statistics)

  return res.status(200).json({
    statistics,
    countries,
  })
})

router.post('/saveAnswers', async (req, res, next) => {
  const now = Date.now(new Date())
  // validate information

  const { ip } = req // not saved.
  const answers = req.body // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

  if (!answers || answers.length < 9 || answers.length > 11) {
    // to prevent too big requests
    res.status(406).json({
      message: `Missing body`,
    })
  }
  const countryData = await getCountry(ip)

  const data = {
    dateCompleted: now,
    country: countryData.country,
    continent: countryData.continent,
    answers,
  }
  const answer = new QuizAnswer(data)
  answer.save().then((dbResult) => console.log(dbResult, 'dbResult'))

  const message = 'Success, your stats has been posted!'
  res.status(201).json({
    message,
  })
})

const getCountriesAvailable = (dataset) => {
  const countrySet = new Set()
  for (let i = 0; i < dataset.length; i++) {
    countrySet.add(dataset[i].country)
  }
  const countries = Array.from(countrySet) // JSON doesn't like Set so it has to be converted to Array
  return countries
}

async function getCountry(ip = '141.89.221.243') {
  if (ip === '::1') {
    ip = '141.89.221.243'
  }
  let country = 'Germany'
  let continent = 'Europe'
  await axios
    .get(
      `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.API_KEY}&ip=${ip}`
    )
    .then((response) => {
      if (response && response.data && response.data.country_code2) {
        country = response.data.country_name
        continent = response.data.continent_name
      }
    })
    .catch((error) => {
      console.error('error:', error)
    })
  console.log(country, continent)
  return { country, continent }
}

module.exports = router
