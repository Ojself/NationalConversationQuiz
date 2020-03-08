const selectedReducer = (state = null, action) => {
  const { type, payload } = action
  switch (type) {
    case 'SELECT':
      return (state = payload)
    default:
      return (state = null)
  }
}

export default selectedReducer
