/**
 * 1. 已知最後一個數為-1，因此以-1為起始值從右到左跑回圈
 * 2. 每跑一個接與前一個比大小跑到最後就是答案所求
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = function(arr) {
    const ans = [];
    let max = -1;
    ans.push(max);
    for (let i = arr.length - 1; i > 0; i--) {
        max = Math.max(max, arr[i]);
        ans.push(max)
    }
    return ans.reverse()
};