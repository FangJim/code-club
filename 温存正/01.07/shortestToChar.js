/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  let ans = [].fill(null);
  let ls = s.length;
  let cNumber = 0;
  let clocation = [];
  for (let i = 0; i < ls; i++) {
    if (s[i] === c) {
      ans[i] = 0;
      clocation[cNumber] = i;
      cNumber++;
    } else {
      ans[i] = ls;
    }
  }
  for (let i = 0; i < cNumber; i++) {
    for (let j = 0; j < ls; j++) {
      let distance = Math.abs(clocation[i] - j);
      if (distance < ans[j]) {
        ans[j] = distance;
      }
    }
  }
  return ans;
  console.log(ans);
};
let s = "aaab";
let c = "b";
shortestToChar(s, c);
