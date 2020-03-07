import React, { PureComponent } from 'react'

import { questionsData } from '../data/questions'

import { useSelector } from 'react-redux'

import Background from './molecules/Background'
import Progress from './molecules/Progress'
import Question from './molecules/Question'
import Answer from './molecules/Answer'
import NextButton from './molecules/NextButton'

const Home = () => {
  const progressValue = useSelector(state => state.progress)
  /* const dispatch = useDispatch() */

  return (
    <div className="container">
      <Background />
      <Progress />
      <Question text={questionsData[progressValue].question} />
      {questionsData[progressValue].answers.map((q, i) => (
        <Answer key={i} text={q} />
      ))}
      <NextButton />
    </div>
  )
}

export default Home
