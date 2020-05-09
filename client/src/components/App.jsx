import React from 'react'

import { Route, Switch } from 'react-router-dom'
import Quiz from './Quiz'
import Home from './Home'
import Results from './Results'
import Statistics from './Statistics'

const App = () => {
  return (
    <div id="app">
      <Switch>
        <Route path="/results" component={Results} />
        <Route path="/statistics" component={Statistics} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/" component={Home} />
        <Route render={() => <h2>404</h2>} />
      </Switch>
      <div id="footerLogo">
        <img src="../../assets/NCW_logo@2x.png" alt="NCW Logo" />
      </div>
    </div>
  )
}
export default App
