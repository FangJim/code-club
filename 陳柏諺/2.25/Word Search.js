/**
 * 1. 用雙層迴圈先跑二維陣列，再用DFS去走訪每一個節點是否有符合word裡的字母
 * 2. Using double loop for two vector array, then using DFS to sreach every node that if they vetify the "word's" word
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function(board, word) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === word.charAt() && dfs(i, j, 0)) {
                return true;
            }
        }
    }
    return false

    function dfs(i, j, count) {
        // count如果跟word的長度一樣代表正確
        if (count === word.length) {
            return true
        }
        // i或j超出範圍或是走訪的數字沒有符合word裡的字母代表錯誤
        if (i < 0 || i >= board.length || j < 0 || j >= board[i].length || board[i][j] !== word.charAt(count)) {
            return false
        }
        // 交換value，一直往下查找
        let temp = board[i][j];
        board[i][j] = '';
        // 檢查上下左右
        let isFound = dfs(i, j - 1, count + 1) || dfs(i, j + 1, count + 1) || dfs(i - 1, j, count + 1) || dfs(i + 1, j, count + 1);
        board[i][j] = temp;
        return isFound
    }
};
console.log(exist([
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"]
], word = "ABCCED"))