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
    <div style={resultStyle.container}>
      <Background src={resultInformation.data.img} />
      <div
        style={resultStyle.contentContainer}
        className="d-flex flex-column justify-content-center"
      >
        <CharacterInformation info={resultInformation.data} />
        <div className="d-flex flex-row justify-content-center">
          <FacebookShareButton
            className="mr-5"
            quote={`${resultInformation.data.caption}`}
            url={resultInformation.urlSharing}
          >
            <FacebookIcon size={100} round={true}></FacebookIcon>
          </FacebookShareButton>
          <TwitterShareButton
            className="ml-5"
            title={`${resultInformation.data.caption}`}
            url={resultInformation.urlSharing}
          >
            <TwitterIcon size={100} round={true} />
          </TwitterShareButton>
        </div>
      </div>
    </div>
  )
}

const resultStyle = {
  container: {
    maxWidth: '80%',
    margin: '0 auto',
  },
  contentContainer: {
    maxWidth: '60%',
    margin: '0 auto',
  },
}

export default Results
