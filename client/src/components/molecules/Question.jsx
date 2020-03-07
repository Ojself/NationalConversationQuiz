import React from 'react'

const Question = props => {
  return (
    <div className="container">
      <div className=" ">
        <p className="text-muted">{props.text}</p>
      </div>
    </div>
  )
}

export default Question
