/**
Given a pattern and a string s, find if s follows the same pattern.
Here follow means a full match, such that there is a bijection between a
letter in pattern and a non-empty word in s.

Example 1:
Input: pattern = "abba", s = "dog cat cat dog"
Output: true

Example 2:
Input: pattern = "abba", s = "dog cat cat fish"
Output: false

Example 3:
Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false
 */

const wordPattern = function (pattern, s) {
  if (pattern.length < 1 || pattern.length >= 300) return false;
  if(/^\s|\s$/.test(s)) return false;
  const sArray = s.split(" ");
  const map = new Map()
  for (let i = 0; i < pattern.length; i++) {
    if (!map.has(pattern[i])){
      map.set(pattern[i],sArray[i]);
    }
    const presentKey = getKey(map, sArray[i]);
    // console.log(getKey(map, sArray[i]));
    if (map.has(pattern[i]) && (map.get(pattern[i]) !== sArray[i]) || presentKey !== pattern[i])return false;
  }
  return true;
};


function getKey(map, input) {
  for (let [key, value] of map.entries()) {
    if (value === input) {
      return key;
    }
  }

  return "Not found";
}

console.log(wordPattern("abba", "dog cat cat dog"));
console.log(wordPattern("abba", "dog dog dog dog"));
console.log(wordPattern("abba", "dog cat cat fish"));
