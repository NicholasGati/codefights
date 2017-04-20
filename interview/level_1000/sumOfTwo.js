/*
You have two integer arrays, a and b, and an integer target value v. Determine whether there is a pair of numbers, where one number is taken from a and the other from b, that can be added together to get a sum of v. Return true if such a pair exists, otherwise return false.

Example:
For a = [1, 2, 3], b = [10, 20, 30, 40], and v = 42, the output should be
sumOfTwo(a, b, v) = true.
*/

const sumOfTwo = (a, b, v) => {
  'use strict';
  const sortedB = b.sort((x,y) => x - y);
  for (let i = a.length - 1; i >= 0; --i) {
    const diff = Math.abs(a[i] - v);
    if (binarySearch(sortedB, diff, 0, sortedB.length - 1)) return true;
  }
  return false;
}

const binarySearch = (values, target, start, end) => {
  'use strict';
  if (start > end) return false;

  const middle = Math.floor((start + end) / 2);
  const value = values[middle];

  if (value > target) return binarySearch(values, target, start, middle - 1);
  if (value < target) return binarySearch(values, target, middle + 1, end);

  return true;
}



/*
  This one worked also but was too slow to pass the hidden tests
*/
const sumOfTwo = (a, b, v) => {
  return a.filter(x => b.includes(Math.abs(x - v))).length;
}
