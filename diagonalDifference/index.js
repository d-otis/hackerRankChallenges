// DIAGONAL DIFFERENCE

const five = [
  [  1,  4,  6,  7,  3 ],
  [  9, 10, 11, 12, 13 ],
  [ 18, 26,  0,  2,  2 ],
  [ 14, 16, 20, 50, 69 ],
  [  0,  4,  3,  9,  2 ]
]

const four = [
  [  3,  4,  5,  6 ],
  [  7,  8,  9, 10 ],
  [ 11, 12, 13, 14 ],
  [ 15, 16, 17, 18 ]
]

let three = [
  [1,2,3],
  [4,5,6],
  [9,8,9]
]

function diagonalDifference(arr) {
  let left = []
  let right = []

  for (let i = 0; i < arr.length; i++) {
    left.push(arr[i][i])
    right.push(arr[i][arr.length - (i + 1)])
  }

  const leftReduced = left.reduce((acc, current) => acc + current, 0)
  const rightReduced = right.reduce((acc, current) => acc + current, 0)

  return Math.abs(leftReduced - rightReduced)
}

// diagonalDifference(five)
// diagonalDifference(four)
diagonalDifference(three)