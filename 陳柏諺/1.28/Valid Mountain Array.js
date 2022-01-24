/**
 * 1. 先找陣列的山頂
 * 2. 再判斷山頂前面的值跟山頂後面的值
 * @param {number[]} arr
 * @return {boolean}
 */
const validMountainArray = function(arr) {
    let mid = arr.indexOf(Math.max(...arr)); // 找山頂
    if (arr.length < 3) {
        return false
    }
    if (mid === arr.length - 1 || mid === 0) {
        return false;
    }
    for (let i = 0; i < mid; i++) {
        if (arr[i + 1] <= arr[i]) {
            return false
        }
    }
    for (let i = mid; i < arr.length - 1; i++) {
        if (arr[i + 1] >= arr[i]) {
            return false
        }
    }
    return true
};