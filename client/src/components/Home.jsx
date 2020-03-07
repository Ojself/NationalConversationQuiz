import React from 'react'
import Background from './molecules/Background'
import './Pages.scss'
import { Link } from 'react-router-dom'

import { Button } from 'reactstrap'
const Home = () => {
  return (
    <div className="container">
      <Background />
      <div className="d-flex flex-column align-items-center">
        <img src="../../assets/promoNbubble.png" alt="NSW defacto" />
        <p className="home-display-text">National Conversation Week</p>
        <p className="home-display-text">Financial Personality quiz</p>
        <Link to="/quiz">
          <Button className={'bg-warning text-light border-0'}> Start </Button>
        </Link>
      </div>
    </div>
  )
}

export default Home
