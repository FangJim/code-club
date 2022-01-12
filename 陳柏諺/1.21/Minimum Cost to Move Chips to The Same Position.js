/**
 * @param {number[]} position
 * @return {number}
 * 1. 我們可以判斷基偶數，基數到基數或偶數到偶數都是0，只有基數到偶數/偶數到基數才會+1
 * 2. 用迴圈判斷裡面的數字是基數還是偶數然後相加最後回傳兩個數量的最小值，
 */
var minCostToMoveChips = function(position) {
    let even = 0;
    let odd = 0;
    for (let i of position) {
        if (i % 2 == 1) {
            odd++;
        } else if (i % 2 == 0) {
            even++;
        }
    }
    return Math.min(odd, even)
};
minCostToMoveChips();