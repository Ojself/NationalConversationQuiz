const threeMonths = 1000 * 60 * 60 * 24 * 7 * 4 * 3 // 3 months in miliseconds
// seed helpers
const getRandomDate = () => {
  let now = Date.now()
  now -= Math.floor(Math.random() * threeMonths)
  return new Date(now)
}
const getRandomCountry = () => {
  const countries = [
    'Germany',
    'France',
    'Spain',
    'Italy',
    'Norway',
    'Sweden',
    'Denmark',
    'Netherlands',
    'Belgium',
    'England',
  ]
  const randomIndex = Math.floor(Math.random() * countries.length)
  return countries[randomIndex]
}
const getRandomContinent = () => {
  return 'Europe'
}
const getRandomScore = () => {
  const randomScore = Math.floor(Math.random() * 45)
  return randomScore
}
const getTitle = score => {
  let title
  switch (true) {
    case score < 10:
      title = 'Avoidance'
      break
    case score < 20:
      title = 'Vigilance'
      break
    case score < 30:
      title = 'Status'
      break
    default:
      title = 'Worship'
      break
  }
  return title
}
const getRandomAnswers = score => {
  let scoreHelper = score
  const answers = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
  }
  while (scoreHelper > 0) {
    let randomOption = Math.floor(Math.random() * 8)
    if (answers[randomOption] > 4) {
      randomOption = Math.floor(Math.random() * 8) // should be recursive recursive
    }
    answers[randomOption] += 1
    scoreHelper -= 1
  }
  return answers
}

module.exports = {
  getRandomDate,
  getRandomCountry,
  getRandomContinent,
  getRandomScore,
  getTitle,
  getRandomAnswers,
}
