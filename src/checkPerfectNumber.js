/**
A perfect number is a positive integer that is equal to the sum of its positive divisors, excluding the number itself. 
A divisor of an integer x is an integer that can divide x evenly.
Given an integer n, return true if n is a perfect number, otherwise return false.

Example 1:
Input: num = 28
Output: true
Explanation: 28 = 1 + 2 + 4 + 7 + 14
1, 2, 4, 7, and 14 are all divisors of 28.

Example 2:
Input: num = 7
Output: false
*/

var checkPerfectNumber = function (num) {
  let total = 0;
  for(let i=1; i<num; i++){
   const rem = num % i;
   if(rem === 0){
    total += i;
   } 
  }
  return total == num ? true : false;
};

console.log(checkPerfectNumber(28));
console.log(checkPerfectNumber(7));
console.log(checkPerfectNumber(14));
console.log(checkPerfectNumber(6));
console.log(checkPerfectNumber(496));
console.log(checkPerfectNumber(33550336));