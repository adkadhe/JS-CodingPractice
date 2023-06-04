/** 
 A string is said to be a child of a another string if it can be formed by deleting 0 or more characters from the other string.
Letters cannot be rearranged.Given two strings of equal length, what's the longest string that can be constructed such that it is a child of both?
Example:
s1 = "ABCD"
s2 = "ABDC"
These strings have two children with maximum length 3, ABC and ABD.
They can be formed by eliminating either the D or C from both strings.
Return 3.
Input Format
  There are two lines, each with a string, s1 and s2.
  
Sample Input 1:
HARRY
SALLY
Sample Output 1:
2
Explanation
  The longest string that can be formed by deleting zero or more characters 
from HARRY and SALLY is AY, whose length is 2.
**/

function commonChild(s1, s2) {
  const len_s1 = s1.length;
  const len_s2 = s2.length;

  const countArr = Array.from({ length: len_s1 + 1 }, () => Array(len_s2 + 1).fill(0));
  for(let i=0; i<len_s1;i++){
    for(let j=0; j<len_s2;j++){
      if(s1[i]===s2[j]){
        countArr[i+1][j+1] = countArr[i][j] + 1;
      }else{
        countArr[i + 1][j + 1] = Math.max(countArr[i+1][j],countArr[i][j+1]);
      }
    }
  }
  console.log(countArr);
}




console.log(commonChild('ABCD', 'ABDC'));
// console.log(commonChild('HARRY','SALLY'));
