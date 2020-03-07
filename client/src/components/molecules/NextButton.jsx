import React from 'react'

import { useDispatch } from 'react-redux'
import { progress } from '../../actions'
import { Button } from 'reactstrap'

import { Link } from 'react-router-dom'

/* TODO  
set correct sizing
*/

const NextButton = props => {
  const { progressValue } = props
  const dispatch = useDispatch()
  return (
    <div className="container d-flex justify-content-center ">
      {progressValue < 7 ? (
        <Button
          onClick={() => dispatch(progress())}
          className="bg-warning text-light border border-white w-25"
        >
          NEXT
        </Button>
      ) : (
        <Link
          to="/results"
          className="btn bg-warning text-light border border-white w-25"
        >
          FINISH
        </Link>
      )}
    </div>
  )
}

export default NextButton
