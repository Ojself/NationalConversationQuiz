import React from 'react'

import { questionsData } from '../data/questions'

import { selectedAnswer } from '../actions'

import { useSelector, useDispatch } from 'react-redux'

import Background from './molecules/Background'
import Progress from './molecules/Progress'
import Question from './molecules/Question'
import Answer from './molecules/Answer'
import NextButton from './molecules/NextButton'

const Quiz = () => {
  const dispatch = useDispatch()

  const currentProgress = useSelector((state) => state.progress)

  return (
    <>
      <div className="ncwContainer">
        <Background src={questionsData[currentProgress].img} />
        <div className="d-flex flex-column align-items-center justify-content-center ncwContentContainer">
          <Progress />
          <Question text={questionsData[currentProgress].question} />
          {questionsData[currentProgress].answers.map((q, i) => (
            <div
              style={{ width: '100%' }}
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
      <div id="footerLogo">
        <img src="../../assets/NCW_logo@2x.png" alt="NCW Logo" />
      </div>
    </>
  )
}

export default Quiz
