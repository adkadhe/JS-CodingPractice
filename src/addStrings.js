/**
Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.
You must solve the problem without using any built-in library for handling large integers (such as BigInteger). 
You must also not convert the inputs to integers directly.

 

Example 1:
Input: num1 = "11", num2 = "123"
Output: "134"

Example 2:
Input: num1 = "456", num2 = "77"
Output: "533"

Example 3:
Input: num1 = "0", num2 = "0"
Output: "0"
 */

addStrings = function (num1, num2) {
  // console.log({ num1: num1 * 1, num2: num2 * 1});
  return ((num2 * 1) + (num1 * 1));
};

console.log(addStrings("11", "123"));
console.log(addStrings("9333852702227987","85731737104263"));
