/**
 * @param {string} columnTitle
 * @return {number}
 */
const titleToNumber = function (columnTitle) {
    let ans = 0;
    for (let i = 0; i < columnTitle.length; i++) {
        //26進制
        ans = ans * 26 + columnTitle[i].charCodeAt() - 64;
    }
    return ans
};
