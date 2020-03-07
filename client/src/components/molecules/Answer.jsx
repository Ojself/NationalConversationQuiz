import React from 'react'
import './Molecules.scss'
/* selected color: #655e58 */
const Answer = props => {
  return (
    <div className="container">
      <div className="question d-flex text-center justify-content-center py-5 my-2 ">
        <p className="text-muted">{props.text}</p>
      </div>
    </div>
  )
}

export default Answer
