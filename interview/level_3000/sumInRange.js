/*
You have an array of integers nums and an array queries, where queries[i] is a pair of indices (0-based). Find the sum of the elements in nums from the indices at queries[i][0] to queries[i][1] (inclusive) for each query, then add all of the sums for all the queries together. Return that number modulo 109 + 7.

Example:
For nums = [3, 0, -2, 6, -3, 2] and queries = [[0, 2], [2, 5], [0, 5]], the output should be
sumInRange(nums, queries) = 10.
The array of results for queries is [1, 3, 6], so the answer is 1 + 3 + 6 = 10.
*/

//////////////////////
// Accepted solution
//////////////////////
const sumInRange = (nums, queries) => {
  'use strict';
  let map = {}, s = 0, t = 0;
  const M = Math.pow(10, 9) + 7;
  nums.forEach((x,i) => {
    t += x;
    map[i] = t;
  });
  queries.forEach(y => {
    if (y[0] === 0) s += map[y[1]];
    else s += map[y[1]] - map[y[0] - 1];
  });

  return s < 0 ? M + (s % M) : (s % M);
}


////////////////////////////////////////////////////////
// Works for all but one since it takes too long for the last hidden test.
const sumInRange = (nums, queries) => {
    'use strict';
    const M = 1000000007;
    const sum = queries.map(y => {
       return nums.slice(y[0], y[1] + 1).reduce((a, b) => a + b);
    });
    const r = sum.reduce((a, b) => a + b) % M;
    return r < 0 ? M + r : r;
}


// Try with recursion. Passes all but last hidden test.
const sumInRange = (nums, queries) => {
  'use strict';
  const M = Math.pow(10, 9) + 7;

  const add = (a, n, i) => {
     if (i === 0) return n + a[i];
     return add(a, n + a[i], i - 1);
  }

  const sum = queries.map(y => {
     const a = nums.slice(y[0], y[1] + 1)
     return add(a, 0, a.length - 1);
  });

  const r = sum.reduce((a, b) => a + b) % M;
  return r < 0 ? M + r : r;
}



// Second try
const sumInRange = (nums, queries) => {
    'use strict';
    const M = 1000000007;
    let sum = 0;
    queries.forEach(y => {
       sum += nums.slice(y[0], y[1] + 1).reduce((a, b) => a + b);
    });
    return sum < 0 ? M + (sum % M) : (sum % M);
}

// Third try (also takes too long on last hidden test):
const sumInRange = (nums, queries) => {
    'use strict';
    const M = 1000000007;
    let sum = 0;
    for (let i = 0; i < queries.length; ++i) {
      const cur = nums.slice(queries[i][0], queries[i][1] + 1);
      for (let j = 0; j < cur.length; ++j) {
        sum += cur[j];
      }
    }
    const r = sum % M;
    return r < 0 ? M + r : r;
}
