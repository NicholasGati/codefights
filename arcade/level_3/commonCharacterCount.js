/*
Given two strings, find the number of common characters between them.

Example:
For s1 = "aabcc" and s2 = "adcaa", the output should be
commonCharacterCount(s1, s2) = 3.
Strings have 3 common characters - 2 "a"s and 1 "c".
*/

const commonCharacterCount = (s1, s2) => {
    'use strict';
    const m = {};
    const s_2 = s2.split('');
    return s1.split('').sort().filter(x => {
      const i = s_2.indexOf(x);
      if (i > -1) {
        s_2.splice(i, 1);
        return x;
      }
    }).length;
}
