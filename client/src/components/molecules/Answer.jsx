import React from 'react'
import { useSelector } from 'react-redux'

const Answer = props => {
  const selectedAnswer = useSelector(state => state.selectedAnswer)

  const backgroundColor = selectedAnswer === props.order ? '#655e58' : '#f9f9f2'
  const fontColor = selectedAnswer === props.order ? 'text-light' : 'text-muted'

  const answerStyle = {
    container: {
      backgroundColor,

      minHeight: '10vmin',
      maxWidth: '66vmin',
      minWidth: '66vmin',
      paddingTop: '3%',
      paddingLeft: '12%',
      paddingRight: '12%',
    },
    text: {
      fontSize: '2.2vmin',
    },
  }

  return (
    <div className="container">
      <div
        style={answerStyle.container}
        className="d-flex text-center justify-content-center my-2 "
      >
        <p style={answerStyle.text} className={fontColor}>
          {props.text}
        </p>
      </div>
    </div>
  )
}

export default Answer
