// Given the string, check if it is a palindrome.

function checkPalindrome(s) {
  'use strict';
  let i = 0;
  while (i < Math.ceil(s.length / 2)) {
    if (s[i] != s[s.length - 1 - i]) {
      return false;
    }
    ++i;
  }
  return true;
}
