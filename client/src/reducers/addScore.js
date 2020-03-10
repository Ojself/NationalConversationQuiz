const addScoreReducer = (state = [], action) => {
  const { type, payload } = action
  switch (type) {
    case 'ADD_SCORE':
      const newState = state.slice(0)
      newState.push(payload)
      return (state = newState)
    default:
      return state
  }
}

export default addScoreReducer
