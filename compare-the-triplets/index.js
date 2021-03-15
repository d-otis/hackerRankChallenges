function compareTriplets(a, b) {
  let aScore = 0
  let bScore = 0

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) { aScore++ } 
    if (a[i] < b[i]) { bScore++ }
  }

  return [ aScore, bScore ]
}

// Sample Case 0
// compareTriplets([5,6,7], [3,6,10])
compareTriplets([17,28,30], [99,16,8])
// should return an array [1,1]