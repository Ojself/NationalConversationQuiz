import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import 'bootstrap/dist/css/bootstrap.css'

import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App.jsx'
import { Provider } from 'react-redux'
import * as registerServiceWorker from './registerServiceWorker'
import { createStore } from 'redux'
import allReducers from './reducers'

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker.unregister()
/* registerServiceWorker() */
