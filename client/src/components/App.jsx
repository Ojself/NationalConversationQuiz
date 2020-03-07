import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Quiz from './Quiz'
import Home from './Home'
import Results from './Results'

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/results" component={Results} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/" component={Home} />
        <Route render={() => <h2>404</h2>} />
      </Switch>
    </div>
  )
}
export default App
