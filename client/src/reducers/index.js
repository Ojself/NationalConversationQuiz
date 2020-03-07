import counterReducer from './counter'
import loggedReducer from './isLogged'
import progressReducer from './progress'

import { combineReducers } from 'redux'

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  progress: progressReducer,
})

export default allReducers
