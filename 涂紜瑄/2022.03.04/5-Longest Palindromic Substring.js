/**
 * https://leetcode.com/problems/longest-palindromic-substring/
 * 給定一個字符串 s，返回 s 中最長的回文子串。
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length == 1) return s;
    if(s === s.split('').reverse().join('')) return s;  //原字串=反轉字串
    let subString = s[0];
    
    for (let i = 0; i < s.length; i++) {
        
        let left = i - 1;
        let right = i + 1;
        let str = s[i];
        
        while (s[i] === s[left]) {
            str = str + s[left];
            left--;
        }
        while (s[left] === s[right]) {
            str = s[left] + str + s[right];
            left--;
            right++;
        }
        if (str.length > subString.length) {
            subString = str;
        }  
    }
    
    return subString;
};

console.log(longestPalindrome("babad"));    //"bab"or"aba
console.log(longestPalindrome("cbbd"));     //"bb"

console.log(longestPalindrome("a"));        //"a"
console.log(longestPalindrome("cddaddb"));  //"ddadd"
console.log(longestPalindrome("abbb"));     //"bbb"


/**
 * 例子: s = "abbb"
 * subString = s[0] = "a"
 * for loop:
 * [0]: str = "a", left =-1, right = 1
 * [1]: str = "b", left = 0, right = 2
 * [2]: str = "b", left = 1, right = 3
 *      s[i] == s[left] == "b"
 *      str = str + s[left] = "bb"
 *      left--; (left=0)
 *      subString = "bb"
 * [3]: str = "b", left = 2, right = 4
 *      s[i] == s[left] =="b"
 *      str = "bb"
 *      left--; (left=1)
 *      s[i] == s[left] == "b"
 *      str = str + s[left] = "bb"+"b" = "bbb"
 *      subString = "bbb"#
 */