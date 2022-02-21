/**
 * @param {number[]} arr
 * @return {number[]}
 */
const replaceElements = (arr) => {
    let ans = [];
    let max = -1;
    ans.push(max);
    for (let i = arr.length - 1; i > 0; i--) {
        max = Math.max(max, arr[i])
        ans.push(max);
    }
    return ans.reverse();
};