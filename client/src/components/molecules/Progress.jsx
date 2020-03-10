import React from 'react'
import { useSelector } from 'react-redux'

const Progress = () => {
  const progressValue = useSelector(state => state.progress)

  return (
    <div style={progressStyle.container} className="container">
      <p style={progressStyle.text}>{progressValue + 1}/10</p>
    </div>
  )
}

const progressStyle = {
  container: {
    backgroundColor: '#ffffff',
    maxWidth: '100vw',
    margin: 'auto',
    color: '#fab701',
  },
  text: {
    height: '100%',
    marginTop: '10vh',
    marginLeft: '17vw',
    fontSize: '2vmin',
  },
}

export default Progress
