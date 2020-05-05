import React from 'react'
import { useSelector } from 'react-redux'

const Progress = () => {
  const progressValue = useSelector((state) => state.progress)

  return (
    <div style={progressStyle.container}>
      <p style={progressStyle.text}>{progressValue + 1}/10</p>
    </div>
  )
}

const progressStyle = {
  container: {
    marginTop: '2vh',
    backgroundColor: '#ffffff',
    width: '100%',
    color: '#fab701',
  },
  text: {
    height: '100%',
    fontSize: '2vmin',
  },
}

export default Progress
