/**
 * Here we use a while loop to continue the process of comparing the key and splitting the search space in two halves.
 * Consider an array arr[] = {2, 5, 8, 12, 16, 23, 38, 56, 72, 91}, and the target = 23.
 * Binary Search is defined as a searching algorithm used in a sorted array by repeatedly dividing the search interval in half. 
 * The idea of binary search is to use the information that the array is sorted and reduce the time complexity to O(log N). 
 */

function binarySearch(arr,k){
  let low = 0;
  let high = (arr.length - 1);
  let mid ;
  while(high >= low){
    mid = low + (Math.floor((high-1)/2));
    if(arr[mid] == k)
      return ("Element is present at index " + mid);

    if(arr[mid] > k)
    high = high-1;

    if(arr[mid] < k)
    low = low + 1;

  }
 if(!mid) return ("Element is not present ");
}

console.log(binarySearch([2, 5, 8, 12, 16, 23, 38, 56, 72, 91],23));