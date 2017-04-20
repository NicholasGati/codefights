/*
Given a sorted array of integers arr and an integer num, find all possible unique subsets of arr that add up to num. Both the array of subsets and the subsets themselves should be sorted in lexicographical order.

Example:
For arr = [1, 2, 3, 4, 5] and num = 5, the output should be
sumSubsets(arr, num) = [[1, 4], [2, 3], [5]].

const arr = [1, 1, 2, 4, 4, 4, 7, 9, 9, 13, 13, 13, 15, 15, 16, 16, 16, 19, 19, 20];
const num = 36;
*/

/* SOLUTION:
  Third Recursive Try:
    - Passed all Sample Tests
    - Passed 5/6 Hidden Tests
*/
const sumSubsets = (arr, num) => {
  'use strict';
  if (!arr.length) return [[]];
  const r = arr.reduce((x,y) => x + y);
  if (r === num) return [arr];
  if (r < num) return [[]];
  const strArr = [];
  arr.forEach((x,i) => fn(i, arr, [], strArr, num, 0));
  const c = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});
  const output = strArr.sort(c.compare).map(x => x.split(',').map(Number));
  return output.length ? output : [[]];
}

const fn = (i, orig, a, strArr, total, sum) => {
  'use strict';
  if (i === 0) {
    if (sum === total && strArr.indexOf(a.toString()) === -1) {
      strArr.unshift(a.toString());
    }
    return;
  }

  orig.forEach((n, j) => {
    if (sum + n <= total) {
      const concat = a.concat([n]);
      fn(i - 1, orig.slice(j + 1), concat, strArr, total, concat.reduce((x,y) => x + y));
    }
  });
  return;
}

const arr = [
  1,  1,  2,  4,  4,
  4,  7,  9,  9,  13,
  13, 13, 15, 15, 16,
  16, 16, 19, 19, 20
];
const num = 36;
sumSubsets(arr, num);


    /*
    List of test case types:
    1.  num: zero
        arr: empty
    2.  num: up to 1000
        arr: empty
    3.  num: up to 1000
        arr: one item which equals num
    4.  num: 1000
        arr: up to num
    */


/*
  END SOLUTION
*/


// First Try
const sumSubsets = (arr, num) => {
  'use strict';
  const result = [];

  for (let i = arr.length - 1; i >= 0; --i) {
    const a = [arr[i]], collection = [];
    let count = arr[i];

    for (let j = i - 1; j >= 0; --j) {
      if (count + arr[j] <= num && (collection.indexOf(j) === -1)) {
        a.unshift(arr[j]);
        count += arr[j];
        collection.push(j);
      }
    }

    if (count === num && result[0]) {
      if (result[0].toString() != a.toString()) {
        result.unshift(a);
      } else {
        result.unshift(recursion(i, collection, result, arr, num));
      }
    } else if (count === num) {
      result.unshift(a);
    }
  }

  if (result.length) {
    return insertionSort(result.filter((x) => x !== undefined));
  }
  return [[]];
}

const recursion = (i, collection, result, arr, num) =>{
  'use strict';
  let count = arr[i];
  let a = [arr[i]]
  for (let j = i - 1; j >= 0; --j) {
    if (count + arr[j] <= num && (collection.indexOf(j) === -1)) {
      a.unshift(arr[j]);
      count += arr[j];
      collection.push(j);
    }
  }

  if (count === num && result[0]) {
    if (result[0].toString() === a.toString()) {
      return recursion(i, collection, result, arr, num);
    } else {
      return a;
    }
  }
}


const insertionSort = (values) => {
  'use strict';
  for (let i = 0; i < values.length; ++i) {
    const temp = values[i];
    let j = i - 1;
    for (; j >= 0 && values[j] > temp; --j) {
      values[j+1] = values[j];
    }
    values[j+1] = temp;
  }
  return values;
}


const arr = [1, 2, 3, 4, 5], num = 5;
sumSubsets(arr, num);


// Second Try:
const sumSubsets = (arr, num) => {
  'use strict';
  const result = [], parsed = [];

  for (let i = arr.length - 1; i >= 0; --i) {
    const a = [arr[i]], collection = [];
    let count = arr[i];
    const x = recursion(i, collection, result, arr, num, [], arr.length - 1);
    result.push(x);
  }



  if (result.length) {
    const filtered = result.filter((x) => x !== undefined)
    const n = [];
    filtered.forEach((a) => {
      n.push(insertionSort(a));
    });
    return n;

  // let i = 0;
  // while (i <= n.length - 2) {
  //   let index = 0;
  //   if (n[i].toString() === n[i+1].toString()) {
  //     while (n[i].toString() === n[i+1].toString()) {
  //       ++i
  //     }
  //     parsed.push(n[i]);
  //     ++i;
  //   }
  //   ++i;
  // }
  }
  // if (parsed.length) {
  //   return parsed;
  // }
  // return [[]];
}


const recursion = (i, collection, result, arr, num, prev, c) =>{
  'use strict';
  if (c < 0) return result[result.length - 1];

  let count = arr[i];
  let a = [arr[i]]
  for (let j = c; j >= 0; --j) {
    if (count + arr[j] <= num && (collection.indexOf(j) === -1)) {
      a.unshift(arr[j]);
      count += arr[j];
      collection.push(j);
    }
  }


  if (count === num) {
    if (prev.toString() != a.toString()) {
      result.push(a);
      return recursion(i, collection, result, arr, num, a, c);
    }
  } else {
    --c;
    return recursion(i, collection, result, arr, num, a, c);
  }
}


const insertionSort = (values) => {
  'use strict';
  for (let i = 0; i < values.length; ++i) {
    const temp = values[i];
    let j = i - 1;
    for (; j >= 0 && values[j] > temp; --j) {
      values[j+1] = values[j];
    }
    values[j+1] = temp;
  }
  return values;
}


const arr = [1, 1, 2, 4, 4, 4, 7, 9, 9, 13, 13, 13, 15, 15, 16, 16, 16, 19, 19, 20];
const num = 36;
sumSubsets(arr, num);


const sumSubsets = (arr, num) => {
  const result = [];

  for (let i = 0; i < arr.length; ++i) {
    let sum = arr[i], tmp = [arr[i]], go = true, index = i;
    while (go) {
      for (let j = i; j < arr.length; ++j) {
        if (index === arr.length - 1) {
          go = false;
        }
        if (sum + arr[j] <= num && j != index) {

          tmp.push(arr[j]);
        }
      }
      ++index;
    }
    result.push(tmp);
  }
  return result;
}


const arr = [
  1,  1,  2,  4,  4,
  4,  7,  9,  9,  13,
  13, 13, 15, 15, 16,
  16, 16, 19, 19, 20
];
const num = 36;
sumSubsets(arr, num);
