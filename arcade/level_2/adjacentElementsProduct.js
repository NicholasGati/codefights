/*
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
*/

const adjacentElementsProduct = (inputArray) => {
  'use strict';
  const arr = [];
  for (let i = 0; i < inputArray.length - 1; ++i) {
   arr.push(inputArray[i] * inputArray[i + 1]);
  }
  return Math.max.apply(null, arr);
};


// another option
const adjacentElementsProduct = (a) => {
  return Math.max.apply(null, a.map((n,i,s) => n * s[i+1] || n));
}
