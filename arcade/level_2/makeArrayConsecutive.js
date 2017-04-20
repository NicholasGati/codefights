/*
Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.
*/

const makeArrayConsecutive2 = (statues) => {
 'use strict';
 const arr = statues.sort((a, b) => a - b);
 return arr.map((x, i) => arr[i + 1] - x - 1 || 0).reduce((x, y) => x + y);
}
