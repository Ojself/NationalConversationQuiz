import React from 'react'
import { useSelector } from 'react-redux'
import Background from './molecules/Background'
import './Pages.scss'

import { Button } from 'reactstrap'

const Results = () => {
  const score = useSelector(state => state.addScore)
  return (
    <div className="container">
      <Background />
      <p>{score}</p>
      <div className="social d-flex justify-content-center align-items-center">
        <Button className="bg-primary">FaceBook</Button>
        <Button className="bg-primary">Twitter</Button>
      </div>
    </div>
  )
}

export default Results
