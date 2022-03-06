/**
 * 1.後面的數字=前面兩個數字和
 * 2. the number behind = the sum of previous and next previous number
 * @param {number} n
 */
function fib(n) {
    const arr = [0, 1];
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n]
}
console.log(fib(10))