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
        style={buttonsStyle.primary}
        disabled={selectedAnswer === null}
        onClick={() => {
          dispatch(progress())
          dispatch(addScore(selectedAnswer))
        }}
        className="bg-warning text-light border border-white"
      >
        NEXT
      </Button>
    ) : (
      <Link
        onClick={() => sendDataToDb(scoreFromState)}
        to="/results"
        className="btn bg-warning text-light border border-white"
      >
        FINISH
      </Link>
    )
  return <div className="  d-flex justify-content-center ">{buttons}</div>
}

const buttonsStyle = {
  primary: {
    minWidth: '15vmin',
    maxWidth: '30vmin',
  },
}

export default NextButton
