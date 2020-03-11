import React from 'react'

const Question = props => {
  return (
    <div className="d-flex justify-content-center">
      <p style={questionStyle.text}>{props.text}</p>
    </div>
  )
}

const questionStyle = {
  text: {
    fontSize: '2.5vmin',
    color: '#5c5c5c',
  },
}

export default Question
