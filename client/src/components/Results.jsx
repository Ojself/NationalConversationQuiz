import React from 'react'
import { useSelector } from 'react-redux'
import Background from './molecules/Background'
import { determineCharacter } from '../helpers'

import CharacterInformation from './molecules/CharacterInformation.jsx'

import {
  FacebookShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
} from 'react-share'

const Results = () => {
  const scoreFromState = useSelector(state => state.addScore)
  const resultInformation = determineCharacter(scoreFromState)

  console.log(resultInformation, 'resultInformation')

  return (
    <div className="container">
      <Background src={resultInformation.data.img} />
      <CharacterInformation info={resultInformation.data} />
      <div className="d-flex justify-content-center">
        <FacebookShareButton
          quote={`${resultInformation.data.caption}`}
          url={resultInformation.urlSharing}
        >
          <FacebookIcon size={100} round={true}></FacebookIcon>
        </FacebookShareButton>
        <TwitterShareButton
          title={`${resultInformation.data.caption}`}
          url={resultInformation.urlSharing}
        >
          <TwitterIcon size={100} round={true} />
        </TwitterShareButton>
      </div>
    </div>
  )
}

export default Results
