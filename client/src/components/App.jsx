import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} />

        <Route render={() => <h2>404</h2>} />
      </Switch>
    </div>
  )
}
export default App
