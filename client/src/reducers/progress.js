const progressReducer = (state = 0, action) => {
  const { type, payload } = action
  switch (type) {
    case 'MAKE_PROGRESS':
      return (state += payload)
    default:
      return state
  }
}

export default progressReducer
