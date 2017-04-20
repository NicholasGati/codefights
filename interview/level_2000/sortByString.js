/*
Sort the letters in the string s by the order they occur in the string t.
*/

const sortByString = (s, t) => {
    'use strict';
   const out = [];
   for (let ch of s) {
      out[t.indexOf(ch)] = ch.repeat(s.split(ch).length - 1);
   }
   return out.join('');
}

const s = "weather";
const t = "therapyw";
const answer = "theeraw";
sortByString(s,t);
