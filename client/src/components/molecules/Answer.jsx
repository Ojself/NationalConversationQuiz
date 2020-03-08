import React from 'react'
import { useSelector } from 'react-redux'

const Answer = props => {
  const selectedAnswer = useSelector(state => state.selectedAnswer)

  const backgroundColor = selectedAnswer === props.order ? '#655e58' : '#f9f9f2'
  const fontColor = selectedAnswer === props.order ? 'text-light' : 'text-muted'

  return (
    <div className="container">
      <div
        style={{ backgroundColor: backgroundColor }}
        className="d-flex text-center justify-content-center py-5 my-2 "
      >
        <p className={fontColor}>{props.text}</p>
      </div>
    </div>
  )
}

export default Answer
