import React from 'react'
import Background from './molecules/Background'
import './Pages.scss'
import { Link } from 'react-router-dom'

import { Button } from 'reactstrap'
const Home = () => {
  return (
    <div className=" ">
      <Background src={`../../assets/top_imgs/top_img_00.png`} />
      <div className="d-flex flex-column align-items-center">
        <img src="../../assets/promoNbubble.png" alt="NSW defacto" />
        <p style={homeStyle.text}>National Conversation Week</p>
        <p style={homeStyle.text}>Financial Personality quiz</p>
        <Link to="/quiz">
          <Button className={'bg-warning text-light border-0'}> Start </Button>
        </Link>
      </div>
    </div>
  )
}

const homeStyle = {
  text: {
    fontSize: '2vmin',
    color: '#5c5c5c',
  },
}

export default Home
