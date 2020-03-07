import React from 'react'
import './Molecules.scss'

const Answer = props => {
  const backgroundColor = props.selected ? '#655e58' : '#f9f9f2'
  return (
    <div className="container">
      <div
        style={{ backgroundColor: backgroundColor }}
        className="d-flex text-center justify-content-center py-5 my-2 "
      >
        <p className="text-muted">{props.text}</p>
      </div>
    </div>
  )
}

export default Answer
