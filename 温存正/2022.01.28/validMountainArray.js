/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  let maxIndex = arr.indexOf(Math.max(...arr));
  let al = arr.length;
  if (al < 3 || maxIndex === 0 || maxIndex === al - 1) {
    return false;
  }
  for (let i = 0; i < maxIndex; i++) {
    if (arr[i] >= arr[++i]) {
      return false;
    }
    --i;
  }
  for (let i = maxIndex; i < al; i++) {
    if (arr[i] <= arr[++i]) {
      return false;
    }
    --i;
  }
  return true;
};
let arr = [0, 2, 3, 3, 5, 2, 1, 0];
validMountainArray(arr);
