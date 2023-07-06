var isPalindrome = function (s) {
  const str = s.replace(/[^a-z0-9+]+/gi, '');
  const lowerCase = str.toLowerCase();
  return lowerCase === lowerCase.split("").reverse().join("") ? true : false;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))