/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let cl = columnTitle.length;
  let ans = 0;
  if (cl === 1) {
    ans = columnTitle.charCodeAt(0) - 64;
  } else {
    for (let i = 0; i < cl; i++) {
      ans += Math.pow(26, cl - i - 1) * (columnTitle[i].charCodeAt(0) - 64);
    }
  }
  return ans;
  console.log(ans);
};
let columnTitle = "ZY";
titleToNumber(columnTitle);
