/*
 * Complete the 'getTotalGoals' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING team
 *  2. INTEGER year
 */

const axios = require('axios')

async function getTotalGoals(team, year) {
  // Barcelona & 2011
  const url1 = `https://jsonmock.hackerrank.com/api/football_matches?team1=${team}&year=${year}`
  const url2 = `https://jsonmock.hackerrank.com/api/football_matches?team2=${team}&year=${year}`

  let homeGoals = []
  let awayGoals = []

  let hasNextPage1 = true
  let hasNextPage2 = true
  let currentPage1 = 1
  let currentPage2 = 1
  let hasError = false

  while (hasNextPage1) {
    const res1 = await axios.get(`${url1}&page=${currentPage1}`)
    if (res1.data.total_pages === 0) { hasError = true }
    if (!hasError && currentPage1 <= res1.data.total_pages) {
      homeGoals = [...homeGoals, ...res1.data.data.map(match => parseInt(match.team1goals)) ]
      currentPage1++
    } else {
      hasNextPage1 = false
    }
  }

  while (hasNextPage2) {
    const res2 = await axios.get(`${url2}&page=${currentPage2}`)
    if (res2.data.total_pages === 0) { hasError = true }
    if (!hasError && currentPage2 <= res2.data.total_pages) {
      awayGoals = [...awayGoals, ...res2.data.data.map(match => parseInt(match.team2goals)) ]
      currentPage2++
    } else {
      hasNextPage2 = false
    }
  }

  let totalHomeGoals = homeGoals.reduce((acc, current) => acc + current, 0)
  let totalAwayGoals = awayGoals.reduce((acc, current) => acc + current, 0)

  if (hasError) return 0
  return totalHomeGoals + totalAwayGoals
}

console.log(getTotalGoals("Non Existing Clug", 2014))