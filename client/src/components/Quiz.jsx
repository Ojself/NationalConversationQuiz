import React from 'react'

import { questionsData } from '../data/questions'

import { useSelector } from 'react-redux'

import Background from './molecules/Background'
import Progress from './molecules/Progress'
import Question from './molecules/Question'
import Answer from './molecules/Answer'
import NextButton from './molecules/NextButton'

/* store selected answer and set in store */
const handleClick = n => {
  console.log(n)
}

const Quiz = () => {
  const progressValue = useSelector(state => state.progress)

  return (
    <div className="container">
      <Background />
      <div className="container">
        <Progress />
        <Question text={questionsData[progressValue].question} />
        {questionsData[progressValue].answers.map((q, i) => (
          <div
            key={i}
            onClick={jarle => {
              handleClick(i)
            }}
          >
            <Answer text={q} />
          </div>
        ))}
        <NextButton progressValue={progressValue} />
      </div>
    </div>
  )
}

export default Quiz
