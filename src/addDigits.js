/**
 Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
 Example 1:
 Input: num = 38
 Output: 2
 Explanation: The process is
 38 --> 3 + 8 --> 11
 11 --> 1 + 1 --> 2 
 Since 2 has only one digit, return it.
 Example 2:
 Input: num = 0
 Output: 0
 */

const addDigit = function(num){
  if (isNaN(num) || num === 0) return 0;
  if (num < 10) return num;
  return num % 9 === 0 ? 9 : num % 9;

 }

console.log(addDigit(38));
console.log(addDigit(123));
console.log(addDigit(0));