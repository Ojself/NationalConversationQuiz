import React from 'react'
import { useState, useEffect } from 'react'

const Background = props => {
  const imageSrc = props.src ? props.src : 'https://picsum.photos/1100/200'

  return (
    <div className="d-flex justify-content-center">
      <img style={backgroundStyle} src={imageSrc} alt="Header Image" />
    </div>
  )
}

const backgroundStyle = {
  width: '80%',
  height: 'auto',
}

export default Background
