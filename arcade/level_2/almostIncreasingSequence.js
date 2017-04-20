// solution
const almostIncreasingSequence = (s) => {
  'use strict';
  if (s.length > 2) {
    let r = false;
    for (let i = 0; i < s.length - 1; ++i) {
      const a = s[i], b = s[i + 1], c = s[i - 1], d = s[i + 2];
      if (a >= b) {
        if (r || a >= d && c >= b)  return false;
        r = true;
      }
    }
  }
  return true;
}

// [4, 5, 3, 4]
// expected output: false
// output: false

/*
  Past iterations
*/

// This one works, but is too slow. First solution.
const almostIncreasingSequence = (seq) => {
  'use strict';
  return seq.map((n, i, s) => {
    const a = s.filter((x, y) => y != i);
    const b = a.filter((dig, ind) => dig >= a[ind + 1]);
    if (b.length) return false;
    return true;
  }).indexOf(true) > -1;
}

// Passed 24/25 tests.
const almostIncreasingSequence = (seq) => {
  'use strict';
  if (seq.length > 2) {
    let r = false;
    for (let i = 0; i < seq.length - 1; ++i) {
      const a = seq[i], b = seq[i + 1], c = seq[i - 1], d = seq[i + 2];
      if (a >= b) {
        if (r || ((c > b) || (a >= d && c === b))) return false;
        r = true;
      }
    }
  }
  return true;
}

const almostIncreasingSequence = (s) => {
  'use strict';
  if (s.length > 2) {
    let r = false;
    for (let i = 0; i < s.length - 1; ++i) {
      const a = s[i], b = s[i + 1], c = s[i - 1], d = s[i + 2];
      if (a >= b) {
        if (r || a >= d && (c >= b || (a >= d && c === b)))  return false;
        r = true;
      }
    }
  }
  return true;
}


const arr = [1, 3, 2];
almostIncreasingSequence(arr);




if (a >= b) {
  if (r || ((c < b) || (a >= d)) && (((c >= b) || ((a >= d) && (c === b)))))  return false;
  r = true;
}


(((c < b) || (a >= d))) && (( (c >= b) || ((a >= d) && (c === b)) ))

if (a >= b) {
  if (r || a >= d && c >= b)  return false;
  r = true;
}
