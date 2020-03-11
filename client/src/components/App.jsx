import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Quiz from './Quiz'
import Home from './Home'
import Results from './Results'
import Statistics from './Statistics'

const App = () => {
  const appStyle = {
    height: '100vh',
    backgroundColor: '#f9f9f2',
  }
  return (
    <div style={appStyle}>
      <Switch>
        <Route path="/results" component={Results} />
        <Route path="/statistics" component={Statistics} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/" component={Home} />
        <Route render={() => <h2>404</h2>} />
      </Switch>
    </div>
  )
}
export default App
