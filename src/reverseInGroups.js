/**
Input:
N = 5, K = 3
arr[] = {1,2,3,4,5}
Output: 3 2 1 5 4
Explanation: First group consists of elements
1, 2, 3. Second group consists of 4,5.
*/

function reverseInGroups(arr, n, k){
  // code here
let newArray = [];
  for(let i=0; i<arr.length; i+= k){
    newArray.push(...(arr.slice(i, i+k)).reverse())
}
  return newArray;
}

console.log(reverseInGroups([ 1, 2, 3, 4, 5],5,3));