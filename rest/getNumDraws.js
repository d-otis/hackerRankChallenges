const axios = require('axios')

async function getNumDraws(year) {
  const baseURL = "https://jsonmock.hackerrank.com/api/football_matches?"
  const numGoals = 0

  const draws = await axios.get(`${baseURL}team1goals=${numGoals}&team2goals=${numGoals}&year=${year}`)
  
}

getNumDraws(2011).then(res => console.log(res))
// should return 516