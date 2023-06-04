var isPalindrome = function (x) {
  if (x < 0) return false;
  let q = 0;
  let num = x;
  let temp = 0;
  while (num != 0) {
    q = num % 10;
    num = Math.floor(num / 10);
    temp = temp * 10 + q;
  }
  return x == parseInt(temp) ? true : false;
};
console.log(isPalindrome(121));
console.log(isPalindrome(13311));
console.log(isPalindrome(-121));