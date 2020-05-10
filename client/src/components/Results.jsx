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
    <>
      <div className="d-flex flex-column justify-content-center ncwContainer">
        <Background src={resultInformation.data.img} />
        <CharacterInformation info={resultInformation.data} />

        <div className="d-flex flex-row justify-content-center mt-5">
          <FacebookShareButton
            className="mr-5"
            quote={`${resultInformation.data.caption}`}
            url={resultInformation.urlSharing}
          >
            <FacebookIcon size={50} round={true}></FacebookIcon>
            <p class="social-share-text">
              Share your results to Facebook and <br /> see how your friends
              compare!
            </p>
          </FacebookShareButton>
          <TwitterShareButton
            className="ml-5"
            title={`${resultInformation.data.caption}`}
            url={resultInformation.urlSharing}
          >
            <TwitterIcon size={50} round={true} />
            <p class="social-share-text">
              Post your results to Twitter!
              <br />{' '}
              <span style={{ display: 'hidden', color: 'white' }}>
                Made with care in Berlin
              </span>
            </p>
          </TwitterShareButton>
        </div>
      </div>
      <div id="footerLogo">
        <img src="../../assets/NCW_logo@2x.png" alt="NCW Logo" />
      </div>
    </>
  )
}

export default Results
