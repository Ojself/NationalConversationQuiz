/* Calculates the index of 3 different results based upon the users answers */
import { resultData } from '../data/results'
export const determineCharacter = score => {
  /* const characterNames = ['budgetbobby' 'savvysam', 'laidbacklee']
  const const url = window.location.href.toLowerCase()
  let tempIndex
  if (
    characterNames.some((c, i) => {
      tempIndex = i
      return url.includes(c)
    })
  ) {
    return {
      data: resultData[tempIndex],
      urlSharing: window.location.href,
      shared: true,
    }
  } */
  const resultIndex = calculateResultIndex(score)
  const data = resultData[resultIndex]
  const urlSharing = `${window.location.href}/${data.name
    .replace(/([^:]\/)\/+/g, '$1') // removes double slash
    .replace(/\s/g, '')}` // removes whitespace

  return { data, urlSharing, shared: false }
}

// Gives back index of most chosen character in string format
export const calculateResultIndex = userScore => {
  const h = {} //
  if (userScore.length < 1 || !userScore) {
    userScore = [1, 2, 0, 2, 1, 2, 1, 0, 1, 1]
  }
  userScore.forEach(a => {
    if (h[a] === undefined) {
      h[a] = 0
    }
    h[a] += 1
  })
  const sorted = [] // sort by highest number
  for (let q in h) {
    sorted.push([q, h[q]])
  }
  sorted.sort((a, b) => {
    return b[1] - a[1]
  })

  console.log(sorted.length, 'sorted') // if all is the same

  const firstKey = sorted[0][0]
  if (!sorted[1]) {
    // incase user chooses all the same questions
    return firstKey
  }
  const secondKey = sorted[1][0]
  const firstValue = sorted[0][1]
  const secondValue = sorted[1][1]

  if (firstValue > secondValue) {
    // one clear winner
    return firstKey
  }
  if (firstValue === secondValue) {
    // tied

    // Mostly A's and B's (Savvy Sam)
    if (
      (firstKey === '0' || firstKey === '1') &&
      (secondKey === '0' || secondKey === '1')
    ) {
      return '1'
    }
    // Mostly B's and C's (Savvy Sam)
    if (
      (secondKey === '1' || secondKey === '2') &&
      (firstKey === '2' || firstKey === '1')
    ) {
      return '1'
    }
    // else return A (Budget Bobby)
    return '0'
  }
  // failsafe. It will never go here
  return '2'
}
