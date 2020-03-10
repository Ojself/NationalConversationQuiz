import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { progress, addScore } from '../../actions'

import { Button } from 'reactstrap'

import api from '../../api'

const sendDataToDb = async score => {
  // api
  console.log(score, 'api')

  /* await api.postScore(score) */
  return false
}

const NextButton = props => {
  const { currentProgress } = props
  const dispatch = useDispatch()

  const scoreFromState = useSelector(state => state.addScore)
  const selectedAnswer = useSelector(state => state.selectedAnswer)
  console.log(selectedAnswer, 'selected')

  const buttons =
    currentProgress < 9 ? (
      <Button
        disabled={selectedAnswer === null}
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
        onClick={() => sendDataToDb(scoreFromState)}
        to="/results"
        className="btn bg-warning text-light border border-white w-25"
      >
        FINISH
      </Link>
    )
  return (
    <div className="container d-flex justify-content-center ">{buttons}</div>
  )
}

export default NextButton
