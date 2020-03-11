import axios from 'axios'

const service = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? '/api'
      : `http://${window.location.hostname}:5000/api`,

  withCredentials: true,
})

const errHandler = err => {
  console.error(err)
  if (err.response && err.response.data) {
    console.error('API response', err.response.data)
    throw err.response.data.message
  }
  throw err
}

export default {
  service: service,

  wakeUp() {
    return service
      .get('/wakeup')
      .then(res => res.data)
      .catch(errHandler)
  },

  getStatistics() {
    return service
      .get(`/statistics`)
      .then(res => res.data)
      .catch(errHandler)
  },

  postScore(body) {
    return service
      .post('/saveAnswers', body)
      .then(res => res.data)
      .catch(errHandler)
  },
}
