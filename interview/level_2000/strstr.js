/*
StrStr:
Needle in the Haystack
Avoid using built-in functions to solve this challenge. Implement them yourself, since this is what you would be asked to do during a real interview.

Implement a function that takes two strings, s and x, as arguments and finds the first occurrence of the string x in s. The function should return an integer indicating the index in s of the first occurrence of x. If there are no occurrences of x in s, return -1.
*/

/*  Rabin-Karb Substring Search Algorithm
    Time Complexity: O(mn) where m = length of pattern, n = length of text
    https://www.youtube.com/watch?v=H4VrKHVG5qI
    --------------------------------------
  Step 1: Choose a prime number
  Step 2: Get ASCII code for a - z and A - Z
  Step 3: Find hash for needle. Let needle be N:
    N = 'abc'
    N[0] = ASCII code for 'a'     index is 0
    N[1] = ASCII code for 'b'     index is 1
    N[2] = ASCII code for 'c'     index is 2
    Hash = N[0] + (N[1] X (prime^index_of_N[1])) + (N[2] X (prime^index_of_N[2]))
  Step 4: Iterate through string S <- 'abracabc'
  Step 5: S2 = S.slice(i, i + N.length)
  Step 6: Get hash of S2
    S2[0] = ASCII code for 'a'    index is 0
    S2[1] = ASCII code for 'b'    index is 1
    S2[2] = ASCII code for 'r'    index is 2
    S2_hash = S2[0] + (S2[1] X (prime^index_of_S2[1])) + (S2[2] X (prime^index_of_S2[2]))
  Step 7: If it's not the same, then go to the next index in iteration and...
    S3[0] = ASCII code for 'b'    index is 0
    S3[1] = ASCII code for 'r'    index is 1
    S3[2] = ASCII code for 'a'    index is 2
    r = S2_hash - S2[0]
    newHash = (r / prime) + S3[2] X (prime^index_of_S3[2])
  Step 8: If we find a match of hashes, then we compare the characters in the needle and the substring to see if they also match IN ORDER. If they do, then return index of first character of substring. If they don't match, then move on as before.
  Step 9: If we have gotten to through the string and have not yet returned an index, then the needle does not exist in the haystack.
*/

'use strict';
const strstr = (s, x) => {
    const prime = 101;
    const needleHash = getHash(x, prime);
    let subS = s.slice(0, x.length);
    let oldH = getHash(subS, prime);
    if (oldH === needleHash) return 0;

    for (let i = 1; i < s.length; ++i) {
      const curSubS = s.slice(i, i + x.length);
      const newHash = getNewHash(oldH, subS, curSubS, prime);
      if ((newHash === needleHash) && (curSubS === x)) return i;
      oldH = newHash;
      subS = curSubS;
    }
    return -1;
}

const getHash = (str, p) => {
  let hash = str.charCodeAt(0);
  for (let i = 1; i < str.length; ++i) {
    hash += str[i].charCodeAt(0) * Math.pow(p,i);
  }
  return hash;
}

const getNewHash = (oldHash, prevStr, str, p) => {
  const n = (oldHash - prevStr.charCodeAt(0)) / p ;
  return n + (str.charCodeAt(str.length - 1) * Math.pow(p, str.length - 1));
}




// Solution 1 was just a naive iteration that matches a substring. It works but is not time efficient.

//Solution 2
const strstr = (s, x) => {
    'use strict';
    const sLen = s.length, xLen = x.length;
    const fn = (str, i, diff, acc) => {
        if (i === -1) return -1;
        if (str.slice(i, i + xLen) === x) return (i + diff) - acc;
        const b = str.slice(i + 1);
        return fn(b, b.indexOf(x[0]), i + (sLen - b.length), (diff + i));
    }
    return fn(s, s.indexOf(x[0]), 0, 0);
}
