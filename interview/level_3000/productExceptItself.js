/*
  1. multiply all nums except current [1, 2, 3, 4] -> [24, 12, 8, 6]
  2. modulo all products of step 1
  3. sum up all of those values from step 2 together
  4.  take that sum and find modulo of that number to get the answe.
*/

// Solution # 1 > ACCEPTED SOLUTION
const productExceptSelf = (arr, m) => {
  'use strict';
  let prods = [], a = 1, b = 1, sum = 0;
  for (let i = 0; i < arr.length; ++i) {
    prods[i] = a;
    a = (a * arr[i]) % m;
  }

  for (let j = arr.length - 1; j >= 0; --j) {
    prods[j] *= b;
    b = (b * arr[j]) % m;
    sum += prods[j];
  }
  return sum % m;
}


// Solution # 2
const productExceptSelf = (arr, m) => {
  'use strict';
  let y = 0;
  for (let i = 0; i < arr.length; ++i) {
    let x = 1;
    for (let j = 0; j < arr.length; ++j) {
      if (j != i) {
        x = (x * arr[j]) % m;
      }
    }
    y += x;
  }
  return y % m;
}

const arr = [1,2, 3,4];
productExceptIteself(arr,12);
