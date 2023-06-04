const countBits = function (n) {
  let arr =[];
  for(let i = 0; i<=n; i++){
    const num = i.toString(2);
    arr.push((num.match(/1/g) || []).length);
  }
  return arr;
};

console.log(countBits(2));
console.log(countBits(5));