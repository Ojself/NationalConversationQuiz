import React from 'react'

const Question = props => {
  return (
    <div className="container d-flex justify-content-center">
      <div style={questionStyle.container}>
        <p style={questionStyle.text}>{props.text}</p>
      </div>
    </div>
  )
}

const questionStyle = {
  container: {
    maxWidth: '33vw',
    margin: 'auto',
  },
  text: {
    fontSize: '2.5vmin',
    color: '#5c5c5c',
  },
}

export default Question
