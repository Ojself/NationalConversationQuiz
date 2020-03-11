import React from 'react'
import { useSelector } from 'react-redux'

const Progress = () => {
  const progressValue = useSelector(state => state.progress)

  return (
    <div style={progressStyle.container} className="">
      <p style={progressStyle.text}>{progressValue + 1}/10</p>
    </div>
  )
}

const progressStyle = {
  container: {
    backgroundColor: '#ffffff',
    margin: 'auto',
    color: '#fab701',
  },
  text: {
    height: '100%',
    fontSize: '2vmin',
  },
}

export default Progress
