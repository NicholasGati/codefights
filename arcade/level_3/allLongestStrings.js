/*
Given an array of strings, return another array containing all of its longest strings.

Example:
For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
allLongestStrings(inputArray) = ["aba", "vcd", "aba"].
*/

const allLongestStrings = (inputArray) => {
    return inputArray.sort((x,y) => y.length - x.length).filter((x,i,s) => x.length === s[0].length);
}
