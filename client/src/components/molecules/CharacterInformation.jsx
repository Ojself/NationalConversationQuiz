import React from 'react'

const CharacterInformation = props => {
  const { name, caption, text, footer } = props.info

  return (
    <div>
      <p className="text-warning mt-5">
        <strong>You Are</strong>
      </p>
      <p style={characterInformationStyle.name} className="display-4">
        {name}
      </p>
      <p style={characterInformationStyle.caption} className="text-warning">
        {caption}
      </p>
      <p style={characterInformationStyle.text}>{text}</p>
      <p style={characterInformationStyle.footer}>{footer}</p>
    </div>
  )
}

const characterInformationStyle = {
  container: {},
  name: {
    color: '#5c5c5c',
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
