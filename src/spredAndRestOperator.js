/**Spread syntax "expands" an array into its elements, 
while rest syntax collects multiple elements and "condenses" them into a single element.*/

function sum(a,b) {
  return (a + b);
}
// console.log(sum(6, 1));
console.log(sum(...[6,1])); //spread operator

function sumArr(...args){
let sum=0;
  for(const arg of args){
    sum += arg
  }
  return sum;
}

console.log(sumArr(1,2,4,5,6,7,9)); // Rest operator