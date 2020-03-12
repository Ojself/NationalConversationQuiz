const threeMonths = 1000 * 60 * 60 * 24 * 7 * 4 * 3 // 3 months in miliseconds
// seed helpers
const getRandomDate = () => {
  let now = Date.now()
  now -= Math.floor(Math.random() * threeMonths)
  return new Date(now)
}
const getRandomCountry = () => {
  const countries = [
    'Albania',
    'Austria',
    'Belarus',
    'Belgium',
    'Bulgaria',
    'Croatia',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Estonia',
    'Finland',
    'France',
    'Georgia',
    'Germany',
    'Greece',
    'Hungary',
    'Iceland',
    'Ireland',
    'Italy',
    'Latvia',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Malta',
    'Moldova',
    'Monaco',
    'Montenegro',
    'The Netherlands',
    'Norway',
    'Poland',
    'Portugal',
    'Romania',
    'Russia',
    'Serbia',
    'Slovakia',
    'Slovenia',
    'Spain',
    'Sweden',
    'Switzerland',
    'Turkey',
    'Ukraine',
  ]
  const randomIndex = Math.floor(Math.random() * countries.length)
  return countries[randomIndex]
}
const getRandomContinent = () => {
  return 'Europe'
}

const getRandomAnswers = () => {
  const answers = []
  for (let i = 0; i < 10; i++) {
    answers.push(Math.floor(Math.random() * 3))
  }
  return answers
}

module.exports = {
  getRandomDate,
  getRandomCountry,
  getRandomContinent,
  getRandomAnswers,
}
