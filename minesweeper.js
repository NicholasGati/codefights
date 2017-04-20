const minesweeper = (matrix) => {
  for (let i = 0; i < matrix.length; ++i) {
    for (let j = 0; j < matrix[i].length; ++j) {
      if (matrix[i][j] === false) matrix[i][j] = 0;
      if (matrix[i][j-1] && matrix[i][j-1] === true) ++matrix[i][j];
      if (matrix[i][j+1] && matrix[i][j+1] === true) ++matrix[i][j];
      if (matrix[i-1] && matrix[i-1][j] === true) {
        ++matrix[i][j];
        if (matrix[i-1][j-1] && matrix[i-1][j-1] === true) ++matrix[i][j];
      }
    }
  }

  for (let i = 0; i < matrix.length; ++i) {
    for (let j = 0; j < matrix[i].length; ++j) {
      if (matrix[i][j] === true) matrix[i][j] = 1;
    }
  }
  return matrix;
}

const matrix = [
  [true, false, false],
  [false, true, false],
  [false, false, false]
];
minesweeper(matrix);
