const countingSort = (arr, max) => {
  'use strict';
  let count = Array(max + 1).fill().map((n, i) => 0);
  arr.forEach(n => ++count[n]);

  let z = 0;
  count.forEach((n,i) => {
    while (n-- > 0) arr[z++] = i;
  });
  return arr;
}

const sortByHeight = (m) => {
  'use strict';
  const arr = m.filter(n => n != -1);
  const sorted = countingSort(arr, Math.max.apply(null, m));
  m.forEach((n,i) => {
    if (m[i] != -1) m[i] = sorted.shift();
  })
  return m;
}
