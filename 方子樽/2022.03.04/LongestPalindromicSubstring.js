/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  let ans = "";
  //對於每個字元 都要檢查回文最長可到多少 並更新ans
  for (let i = 0; i < s.length; i++) {
    expand(i, i);
    //防止回文樣式是偶數個
    expand(i, i + 1);
  }

  //左右展開去找回文
  function expand(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      let subStr = s.substring(left, right + 1);
      if (subStr.length > ans.length) ans = subStr;

      left--;
      right++;
    }
  }
  return ans;
};
