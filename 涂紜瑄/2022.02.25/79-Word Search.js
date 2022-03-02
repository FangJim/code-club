/**
 * https://leetcode.com/problems/word-search/
 * https://dosmanthus.medium.com/algorithm-leetcode-79-word-search-javascript-dfs-%E6%B7%B1%E5%BA%A6%E5%84%AA%E5%85%88%E6%90%9C%E5%B0%8B-fa6bab9cae08
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
    if (word === "") return true;
  
    for (var row = 0; row < board.length; row++) {
        for (var col = 0; col < board[row].length; col++) {
            if (board[row][col] === word[0]) {
                if (search(0, row, col)) return true;
            }
        }
    }
    return false;
        
    function search(index, x, y) {
        if (index === word.length) return true;
        if (!board[x] || !board[x][y]) return false;
        if (board[x][y] !== '#' && board[x][y] === word[index]) {
            let ch = board[x][y];
            board[x][y] = '#';
            
            if (search(index + 1, x - 1, y)) return true; //up
            if (search(index + 1, x + 1, y)) return true; //down
            if (search(index + 1, x, y - 1)) return true; //left
            if (search(index + 1, x, y + 1)) return true; //right
            board[x][y] = ch; // backtracking
        }
        return false;
    }
};

console.log(exist([
    ["A","B","C","E"],
    ["S","F","C","S"],
    ["A","D","E","E"]
], word = "ABCCED"));

console.log(exist([
    ["A","B","C","E"],
    ["S","F","C","S"],
    ["A","D","E","E"]
], word = "ABCB"));