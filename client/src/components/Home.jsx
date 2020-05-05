import React from 'react'

import Background from './molecules/Background'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

import api from '../api'

const Home = () => {
  return (
    <div className="ncwContainer">
      <Background src={`../../assets/top_imgs/top_img_00@2x.png`} />
      <div className="d-flex flex-column align-items-center my-5 ncwContentContainer">
        <img
          style={homeStyle.img}
          src="../../assets/promoNbubble@2x.png"
          alt="NSW defacto"
        />
        <div className="w-100 my-5"></div>
        <p style={homeStyle.text}>National Conversation Week</p>
        <p style={homeStyle.text}>Financial Personality quiz</p>

        <Link style={homeStyle.link} to="/quiz">
          <Button
            style={homeStyle.button}
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
  img: {
    width: '40%',
    height: 'auto',
  },
  text: {
    textAlign: 'center',
    marginTop: '-2vmin',
    fontSize: '3vmin',
    color: '#5c5c5c',
  },
  link: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    padding: '2% 0',
    width: '30%',
  },
}

export default Home
