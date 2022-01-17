/**
 * 1. 先跑一次迴圈看指定的字母在哪個位置
 * 2. 再跑一次迴圈去做絕對值位置的刪減，然後從陣列中找最小值輸出答案
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
const shortestToChar = function(s, c) {
    let answer = [];
    let count = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            count.push(i);
        };
    };
    for (let i = 0; i < s.length; i++) {
        let minDistance = [];
        for (let j = 0; j < count.length; j++) {
            minDistance.push(Math.abs(count[j] - i));
        }
        answer.push(Math.min(...minDistance));
    }
    return answer
};