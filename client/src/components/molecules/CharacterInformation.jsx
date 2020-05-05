import React from 'react'

const CharacterInformation = (props) => {
  const { name, caption, text, footer } = props.info

  return (
    <div style={characterInformationStyle.container}>
      <p className="text-warning mt-5 ">
        <strong>You Are</strong>
      </p>
      <p id="result-name">{name}</p>
      <p style={characterInformationStyle.caption} className="text-warning">
        {caption}
      </p>
      <p style={characterInformationStyle.text}>{text}</p>
      <p style={characterInformationStyle.footer}>{footer}</p>
    </div>
  )
}

const characterInformationStyle = {
  container: {
    backgroundColor: 'white',
    height: '100%',
    maxWidth: '65%',
    margin: '0 auto',
  },

  caption: {
    fontSize: '2.2vmin',
    color: '#5c5c5c',
  },
  text: {
    fontSize: '2.2vmin',
    color: '#5c5c5c',
  },
  footer: {
    fontSize: '2.2vmin',
    color: '#5c5c5c',
  },
}

export default CharacterInformation
