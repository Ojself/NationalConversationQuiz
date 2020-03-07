export const increment = (n = 2) => {
  return {
    type: 'INCREMENT',
    payload: n,
  }
}

export const decrement = () => {
  return {
    type: 'DECREMENT',
  }
}

export const progress = (score = 1) => {
  return {
    type: 'MAKE_PROGRESS',
    payload: score,
  }
}
