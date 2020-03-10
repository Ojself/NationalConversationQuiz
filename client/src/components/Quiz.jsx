import React from 'react'

import { questionsData } from '../data/questions'

import { selectedAnswer } from '../actions'

import { useSelector, useDispatch } from 'react-redux'

import Background from './molecules/Background'
import Progress from './molecules/Progress'
import Question from './molecules/Question'
import Answer from './molecules/Answer'
import NextButton from './molecules/NextButton'

/* store selected answer and set in store */

const Quiz = () => {
  const dispatch = useDispatch()

  const currentProgress = useSelector(state => state.progress)

  return (
    <div className="container">
      <Background src={questionsData[currentProgress].img} />
      <div className="d-flex flex-column align-items-center justify-content-center">
        <Progress />
        <Question text={questionsData[currentProgress].question} />
        {questionsData[currentProgress].answers.map((q, i) => (
          <div
            key={i}
            onClick={() => {
              dispatch(selectedAnswer(i))
            }}
          >
            <Answer order={i} text={q} />
          </div>
        ))}
        <NextButton currentProgress={currentProgress} />
      </div>
    </div>
  )
}

export default Quiz
