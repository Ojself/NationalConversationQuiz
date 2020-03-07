const loggedReducer = (state = false, action) => {
  const { type } = action
  switch (type) {
    case 'SIGN_IN':
      return !state
    default:
      return state
  }
}

export default loggedReducer
