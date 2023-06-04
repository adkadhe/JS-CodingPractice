/**
Given two integer arrays nums1 and nums2, return an array of their intersection. 
Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

 Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
 */

const intersect = function (nums1, nums2) {
 return nums1.filter(x => nums2.includes(x))
};

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([1, 2, 2, 1], [2]));
console.log(intersect([3, 1, 2], [1, 1]));
