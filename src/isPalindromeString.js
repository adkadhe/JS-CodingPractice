var isPalindrome = function (s) {
  console.log({s});
  const str = s.replace(/[^a-z0-9+]+/gi, '');
  console.log({ str });
  const lowerCase = str.toLowerCase();
  console.log({ lowerCase });
  return lowerCase === lowerCase.split("").reverse().join("") ? true : false;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))