import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
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
  const currentProgress = useSelector((state) => state.progress)

  // quick fix for divs skewering outside of view
  // how to fix: minHeight 100vh and height auto
  if (
    currentProgress === 6 ||
    currentProgress === 8 ||
    window.location.pathname === '/results'
  ) {
    appStyle.height = '120vh'
  } else {
    appStyle.height = '100vh'
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
