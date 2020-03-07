import React from 'react'
import { useSelector } from 'react-redux'
import './Molecules.scss'

const Progress = props => {
  const progressValue = useSelector(state => state.progress)

  return (
    <div className="container">
      <span className="progress">{progressValue + 1}/8</span>
    </div>
  )
}

export default Progress
