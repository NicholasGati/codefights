/*
Given an array of numbers arr, determine whether arr can be divided into two subsets for which the sum of elements in both subsets is the same.
HELP: https://en.wikipedia.org/wiki/Partition_problem
------------------------------------------------------------------
Using Partition Partition_problem.

Let N be the number of elements in S. Let K be the sum of all elements in S.
If K is odd, then the S can't contain 2 subsets with equal sums.
If K is even, calculate [K/2] and find the subset with the array that equals [K/2].
We need to determine if there is a subset of S that sums to [K/2].

1.  Create a matrix of size M[(k/2) + 1][arr.length + 1]
2.  Prefill everything in array with False.
3.  The first row is all True, while the first column (except for the first one in the first row) is all false.
4.  Use dynamic programming to fill in the rest of the matrix.
5.  The answer (True or False) will be at the bottom most right.
*/

const subsetSum = (arr) => {
  'use strict';
  // Get sum of matrix.
  const k = arr.reduce((a,b) => a + b);

  // If the sum is 0, return true.
  if (k === 0) return true;

  // If the sum is odd, return false.
  if (k % 2 !== 0) return false;

  // Create the matrix and default everything to be false.
  const matrix = new Array((k/2) + 1).fill().map(() => {
    return new Array(arr.length + 1).fill(false);
  });

  // Fill in first row as true.
  matrix[0].forEach((x,i) => matrix[0][i] = true);

  // Iterate over the entire matrix and fill in correct values.
  for (let i = 1; i <= (k/2); ++i) {
    for (let j = 1; j <= arr.length; ++j) {
      matrix[i][j] = matrix[i][j-1];
      if (i >= arr[j-1]) {
        matrix[i][j] = matrix[i][j] || matrix[i-arr[j-1]][j-1];
      }
    }
  }

  // The result is the value in the bottom most right column.
  return matrix[k/2][arr.length];
}

subsetSum([3, 1, 1, 2, 2, 1]);

/*
Matrix Result from above example:

[ [ true, true, true, true, true, true, true ],
  [ false, false, true, true, true, true, true ],
  [ false, false, false, true, true, true, true ],
  [ false, true, true, true, true, true, true ],
  [ false, false, true, true, true, true, true ],
  [ false, false, false, true, true, true, true ] ] <-- answer (last element)
*/
