/**
 * 1. use Manacher's Algorithm
 * 2. https://www.cnblogs.com/grandyang/p/4475985.html
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s) {
    let sign = '$#';
    for (let i = 0; i < s.length; i++) {
        sign += s[i];
        sign += '#';
    }
    let max = 0; // max position of Palindromic
    let id = 0; // the center of string
    let resId = 0;
    let resMax = 0;
    let string = new Array(sign.length);
    for (let i = 1; i < sign.length; ++i) {
        string[i] = max > i ? Math.min(string[2 * id - i], max - i) : 1;
        while (sign[i + string[i]] == sign[i - string[i]]) {
            ++string[i]
            if (max < i + string[i]) {
                max = i + string[i];
                id = i;
            }
            if (resMax < string[i]) {
                resMax = string[i];
                resId = i;
            }
        }
    }
    return s.substr((resId - resMax) / 2, resMax - 1);
};
console.log(longestPalindrome("ac"))