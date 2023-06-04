/**
Given an array nums of size n, return the majority element.
The majority element is the element that appears more than ⌊n / 2⌋ times.
 You may assume that the majority element always exists in the array.

 

Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2
 
 */
majorityElement = function (nums) {

const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
    }else{
     const currentVal = map.get(nums[i]);
      map.set(nums[i], currentVal+1)
     }

  }
  return [...map.entries()].reduce((a, e) => e[1] > a[1] ? e : a)[0]
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([1]));

