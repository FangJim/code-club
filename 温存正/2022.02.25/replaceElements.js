/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let ans = [];
  let al = arr.length;
  if (al === 1) {
    ans[0] = -1;
    return ans;
  }
  for (let i = 1; i < al; i++) {
    let tmp = arr.splice(i);
    ans.push(Math.max(...tmp));
    arr = arr.concat(tmp);
  }
  ans.push(-1);
  return ans;
};
let arr = [17];
console.log(replaceElements(arr));
