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
  const scoreFromState = useSelector((state) => state.addScore)
  const resultInformation = determineCharacter(scoreFromState)

  return (
    <div className="d-flex flex-column justify-content-center ncwContainer">
      <Background src={resultInformation.data.img} />
      <CharacterInformation info={resultInformation.data} />

      <div className="d-flex flex-row justify-content-center mt-5">
        <FacebookShareButton
          className="mr-5"
          quote={`${resultInformation.data.caption}`}
          url={resultInformation.urlSharing}
        >
          <p class="social-share-text">
            Share your results to Facebook and <br /> see how your friends
            compare!
          </p>
          <FacebookIcon size={100} round={true}></FacebookIcon>
        </FacebookShareButton>
        <TwitterShareButton
          className="ml-5"
          title={`${resultInformation.data.caption}`}
          url={resultInformation.urlSharing}
        >
          <p class="social-share-text">Post your results to Twitter!</p>
          <TwitterIcon size={100} round={true} />
        </TwitterShareButton>
      </div>
    </div>
  )
}

export default Results
