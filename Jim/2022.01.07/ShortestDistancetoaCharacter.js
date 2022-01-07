/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
let shortestToChar_badWay = (string, c) => {
    let s = string.split('');
    let cPosition = [];
    let ans = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            cPosition.push(i);
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) ans.push(0);
        else {
            let min = Number.POSITIVE_INFINITY;
            console.log(min)
            for (let j = 0; j < cPosition.length; j++) {
                if (Math.abs(cPosition[j] - i) < min) {
                    min = Math.abs(cPosition[j] - i)
                }
                else break
            }
            ans.push(min)
        }
    }
    return ans
};

// let shortestToChar = (s, c) => {
//     let n = s.length
//     let ans = new Array(n)
//     let c_position = -n;
//     for (let i = 0; i < n; i++) {//往右校正
//         if (s[i] == c) {
//             c_position = i
//         }
//         ans[i] = i - c_position
//     }
//     for (let i = n - 1; i >= 0; i--) {//往左校正
//         if (s[i] == c) {
//             c_position = i
//         }
//         ans[i] = Math.min(ans[i], Math.abs(i - c_position))
//     }
//     return ans
// };

console.log(shortestToChar_badWay("loveleetcode", "e"))