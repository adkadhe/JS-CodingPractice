/**
Given head which is a reference node to a singly-linked list.
The value of each node in the linked list is either 0 or 1. 
The linked list holds the binary representation of a number.
Return the decimal value of the number in the linked list.
The most significant bit is at the head of the linked list.

Example 1:

Input: head = [1,0,1]
Output: 5
Explanation: (101) in base 2 = (5) in base 10
Example 2:

Input: head = [0]
Output: 0
*/
// var getDecimalValue = function (head) {
// let result = 0;
// head.forEach((element,index) => {
// // console.log({element , index});
// result+= (element* (2**index))
// });
// return result
// };
var getDecimalValue = function (head) {
  let result = '';
  while (head) {
    result += head.val;
    head = head.next;
  }
  return parseInt(result, 2)
};

console.log(getDecimalValue([1, 0, 1]));
console.log(getDecimalValue([0]));
console.log(getDecimalValue([1]));
console.log(getDecimalValue([0, 0, 1, 0, 0]));