const flat = function (arr, n) {
if(n==0){
  return arr;
}
let result =[]
for(let i=0; i<arr.length;i++){
if(n>0 && Array.isArray(arr[i])){
  result.push(...flat(arr[i], n-1));
}
else{
  result.push(arr[i]);
}
}
  return result;
};

console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 0))
console.log(flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 1))