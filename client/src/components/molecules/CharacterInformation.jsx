import React from 'react'

const CharacterInformation = props => {
  const { name, caption, text, footer } = props.info

  return (
    <div className="px-5 mx-5">
      <p>You Are</p>
      <p>{name}</p>
      <p>{caption}</p>
      <p>{text}</p>
      <p>{footer}</p>
    </div>
  )
}

export default CharacterInformation
