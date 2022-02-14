/**
 * 1. 依題目要求左到右，上到下
 * @param {number} n
 * @return {number[][]}
 */
const generateMatrix = function(n) {
    let ans = Array(n).fill(0).map(n => Array(n));
    let left = 0;
    let right = n - 1;
    let top = 0;
    let bottom = n - 1;
    let num = 1;
    while (left < right) {
        // left->right
        for (let i = left; i < right; i++) {
            ans[top][i] = num++;
        }
        // top->bottom
        for (let i = top; i < bottom; i++) {
            ans[i][right] = num++;
        }
        // right->left
        for (let i = right; i > left; i--) {
            ans[bottom][i] = num++;
        }
        // bottom->top
        for (let i = right; i > left; i--) {
            ans[i][left] = num++;
        }
        left++;
        right--;
        top++;
        bottom--;
    }
    if (n % 2 == 1) {
        n = Math.floor(n / 2);
        ans[n][n] = num;
    }
    return ans
};