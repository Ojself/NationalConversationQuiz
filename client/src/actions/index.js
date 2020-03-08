// To keep track of how much profress the user has made eg 3/8
export const progress = (score = 1) => {
  return {
    type: 'MAKE_PROGRESS',
    payload: score,
  }
}

// To determine which answer is clicked and then highlight it
export const selectedAnswer = (n = 0) => {
  return {
    type: 'SELECT',
    payload: n,
  }
}

// To keep of score of the users answer. Different score leads to different results
export const addScore = (n = 0) => {
  return {
    type: 'ADD_SCORE',
    payload: n,
  }
}
