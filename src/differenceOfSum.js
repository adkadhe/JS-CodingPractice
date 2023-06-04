/**
You are given a positive integer array nums.
The element sum is the sum of all the elements in nums.
The digit sum is the sum of all the digits (not necessarily distinct) that appear in nums.
Return the absolute difference between the element sum and digit sum of nums.
Note that the absolute difference between two integers x and y is defined as |x - y|.

Example 1:

Input: nums = [1,15,6,3]
Output: 9
Explanation: 
The element sum of nums is 1 + 15 + 6 + 3 = 25.
The digit sum of nums is 1 + 1 + 5 + 6 + 3 = 16.
The absolute difference between the element sum and digit sum is |25 - 16| = 9.

Example 2:
Input: nums = [1,2,3,4]
Output: 0
Explanation:
The element sum of nums is 1 + 2 + 3 + 4 = 10.
The digit sum of nums is 1 + 2 + 3 + 4 = 10.
The absolute difference between the element sum and digit sum is |10 - 10| = 0.
 */

const differenceOfSum = function (nums) {
  let sumOfElement = 0;
  let sumOfdigit = 0;
  for(let i=0;i<nums.length;i++){
    sumOfElement+=nums[i]; 
    const digit = addDigit(nums[i]);
    sumOfdigit += digit;
  }
  return sumOfElement - sumOfdigit;
};

const addDigit = function (num) {
  if (isNaN(num) || num === 0) return 0;
  if (num < 10) return num;
  return num % 9 === 0 ? 9 : num % 9;
}

console.log(differenceOfSum([1, 15, 6, 3]));
console.log(differenceOfSum([2, 7, 16, 19, 12, 2, 15, 1, 8, 6, 20, 1, 12, 3, 1, 17, 11, 17, 3, 3]));