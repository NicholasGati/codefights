/*
  Reverse the strings contained in each pair of matching parentheses,
  starting from the innermost pair.
*/
'use strict';
const reverseParentheses = s => {
  const stack = [];
  for (let i = 0; i < s.length; ++i) {
    if (s[i] === '(') stack.push([i]);
    if (s[i] === ')') {
      const begin = stack[stack.length - 1];
      const end = i + 1;
      const rev = s.slice(begin, end).split('').reverse().join('');
      s = s.substring(0, begin) + rev + s.substring(end);
      stack.pop();
    }
  }
  return s.replace(/[()]/g, '');
}

reverseParentheses("a(bcdefghijkl(mno)p)q");

/*
  Regex to find deepest pair of parentheses.
  Did not use regex but could have.
  regex = /\([^()]*\)/i;
*/
