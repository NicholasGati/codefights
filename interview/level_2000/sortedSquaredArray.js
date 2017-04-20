/*
You have a sorted array of integers. Write a function that returns a sorted array containing the squares of those integers.

Example:
For array = [-6, -4, 1, 2, 3, 5], the output should be
sortedSquaredArray(array) = [1, 4, 9, 16, 25, 36].

The array of squared integers from array is: [36, 16, 1, 4, 9, 25]. When sorted, it becomes: [1, 4, 9, 16, 25, 36].
*/

const sortedSquaredArray = a => a.map(n => n * n).sort((x,y) => x - y);
