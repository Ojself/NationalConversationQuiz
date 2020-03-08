import progressReducer from './progress'
import selectedReducer from './selectedAnswer'
import addScoreReducer from './addScore'

import { combineReducers } from 'redux'

const allReducers = combineReducers({
  progress: progressReducer,
  selectedAnswer: selectedReducer,
  addScore: addScoreReducer,
})

export default allReducers
