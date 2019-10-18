const fs = require('fs');

function countSquares(matrix) {
  const countingMatrix = Array.from({length: matrix.length + 1}, _ => Array.from({length: matrix[0].length + 1}, _ => 0));

  let sum = 0;

  for (let i = 1; i < countingMatrix.length; i++) {
    for (let j = 1; j < countingMatrix[0].length; j++) {
      if (matrix[i - 1][j - 1] === 'W') {
        countingMatrix[i][j] = Math.min(countingMatrix[i][j - 1], countingMatrix[i - 1][j - 1], countingMatrix[i - 1][j]) + 1;
        sum += countingMatrix[i][j];
      }
    }
  }
  return sum;
}

const tests = [
  {
    matrix: [
      ["W", "W"],
      ["W", "W"]
    ],
    expected: 5
  },
  {
    matrix: [
      ["W", "W", "W"],
      ["W", "W", "W"],
      ["W", "W", "W"]
    ],
    expected: 14
  },
  {
    matrix: [
      ["W", "W", "W"],
      ["W", "B", "W"],
      ["W", "W", "W"]
    ],
    expected: 8
  },
  {
    matrix: [
      ["W", "W", "W"],
      ["W", "W", "W"],
      ["W", "W", "B"]
    ],
    expected: 11
  },
  {
    matrix: [
      ["W", "W", "W", "W"],
      ["W", "W", "W", "W"],
      ["W", "W", "W", "W"],
      ["W", "W", "W", "W"]
    ],
    expected: 30
  },
  {
    matrix: [
      ["W", "W", "W", "W"],
      ["W", "W", "W", "W"],
      ["W", "W", "W", "W"],
      ["W", "W", "W", "B"]
    ],
    expected: 26
  },
  {
    matrix: [
      ["W", "W", "W", "W"],
      ["W", "W", "W", "W"],
      ["W", "B", "W", "W"],
      ["W", "W", "W", "B"]
    ],
    expected: 18
  },
  {
    matrix: [
      ["B", "W", "W", "W"],
      ["W", "W", "W", "W"],
      ["W", "B", "W", "W"],
      ["W", "W", "W", "B"]
    ],
    expected: 16
  },
  {
    matrix: [
      ["B", "W", "W", "W"],
      ["W", "W", "B", "W"],
      ["W", "B", "W", "W"],
      ["B", "W", "W", "B"]
    ],
    expected: 11
  }
]

tests.forEach(({matrix, expected}) => console.log(countSquares(matrix) === expected))

fs.readFile('./grid-2000x2000.txt', (err, data) => {
  if (err) console.log(err);
  const matrix = data.toString().split('\n').map(line => line.split(''));
  countSquares(matrix) // 352303024
});


