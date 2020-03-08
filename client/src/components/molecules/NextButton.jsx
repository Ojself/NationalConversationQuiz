import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { progress, addScore } from '../../actions'
import { Button } from 'reactstrap'

import { Link } from 'react-router-dom'

const NextButton = props => {
  const { currentProgress } = props
  const dispatch = useDispatch()

  const selectedAnswer = useSelector(state => state.selectedAnswer)
  console.log(selectedAnswer, 'selected')

  const buttons =
    currentProgress < 7 ? (
      <Button
        onClick={() => {
          dispatch(progress())
          dispatch(addScore(selectedAnswer))
        }}
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
    )
  return (
    <div className="container d-flex justify-content-center ">
      {selectedAnswer !== null && buttons}
    </div>
  )
}

export default NextButton
