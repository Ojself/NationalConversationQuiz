import React from 'react'
import { useState, useEffect } from 'react'

const Background = props => {
  let imageSrc = 'https://picsum.photos/1100/200'

  return (
    <div>
      <img src={imageSrc} alt="Header Image" />
    </div>
  )
}

export default Background
