import React from 'react'
import Background from './molecules/Background'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

import api from '../api'

const Home = () => {
  return (
    <div style={homeStyle.container}>
      <Background src={`../../assets/top_imgs/top_img_00@2x.png`} />
      <div
        style={homeStyle.contentContainer}
        className="d-flex flex-column align-items-center"
      >
        <img src="../../assets/promoNbubble.png" alt="NSW defacto" />
        <p style={homeStyle.text}>National Conversation Week</p>
        <p style={homeStyle.text}>Financial Personality quiz</p>
        <Link to="/quiz">
          <Button
            onClick={() => api.wakeUp()}
            className={'bg-warning text-light border-0'}
          >
            Start
          </Button>
        </Link>
      </div>
    </div>
  )
}

const homeStyle = {
  container: {
    maxWidth: '80%',
    margin: '0 auto',
  },
  contentContainer: {
    maxWidth: '60%',
    margin: '0 auto',
  },
  text: {
    fontSize: '2vmin',
    color: '#5c5c5c',
  },
}

export default Home
