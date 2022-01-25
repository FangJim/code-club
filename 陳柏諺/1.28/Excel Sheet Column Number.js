/**
 * 1. 從十位數開始，每多一個位數=26的次方，再*上對應的數字，最後做加總
 * 2. 字母(A-Z)-64就是對應的數字
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let length = columnTitle.length;
    let sum = 0;
    for (let i = 0; i < length; i++) {
        sum = sum * 26 + columnTitle[i].charCodeAt() - 64;
    }
    return sum
};