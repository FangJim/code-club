/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let word = words[0].split("");
    let ans = [];
    for (let i of word) {
        if (words.every(item => item.includes(i))) {
            words = words.map(item => item.replace(i, ""))
            ans.push(i)
        }
    }
    return ans
};
commonChars()