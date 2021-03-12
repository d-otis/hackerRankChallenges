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
  const baseURL = "https://jsonmock.hackerrank.com/api/football_matches?"

  const homeGoals = await getGoals(team, year, "home")
  const awayGoals = await getGoals(team, year, "away")

  async function getGoals(team, year, teamRole) {
    let hasNextPage = true
    let hasErrors = false
    let goals = []
    let currentPage = 1
    const teamKey = teamRole === "home" ? "team1" : "team2"

    while (hasNextPage) {
      const response = await axios.get(`${baseURL}${teamKey}=${team}&page=${currentPage}&year=${year}`)

      if (response.data.total_pages === 0) {
        hasErrors = true
        hasNextPage = false
      } else if (!hasErrors && currentPage <=response.data.total_pages ) {
        goals = [ ...goals, ...response.data.data.map(game => parseInt(game[`${teamKey}goals`])) ]
        currentPage++
      } else {
        hasNextPage = false
      }
    }
    return goals.reduce((acc, current) => acc + current, 0)
  }
  return homeGoals + awayGoals
}


getTotalGoals("Barcelona", 2014).then(res => console.log(res))