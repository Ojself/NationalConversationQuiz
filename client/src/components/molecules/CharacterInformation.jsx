import React from 'react'

const CharacterInformation = props => {
  const { name, caption, text, footer } = props.info

  return (
    <div className="">
      <p className="text-warning ">
        <strong>You Are</strong>
      </p>
      <p className="display-3">{name}</p>
      <p>{caption}</p>
      <p>{text}</p>
      <p>{footer}</p>
    </div>
  )
}

const characterInformationStyle = {
  container: {},
  name: {},
  caption: {},
  text: {},
  footer: {},
}

export default CharacterInformation
