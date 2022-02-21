/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let n = board.length;
  let m = board[0].length;
  const dfs = function (row, column, pos) {
    if (
      row === n ||
      row < 0 ||
      column === m ||
      column < 0 ||
      board[row][column] !== word[pos]
    ) {
      return false;
    }
    if (pos === word.length - 1) {
      return true;
    }
    board[row][column] = ".";
    let found =
      dfs(row + 1, column, pos + 1) ||
      dfs(row - 1, column, pos + 1) ||
      dfs(row, column + 1, pos + 1) ||
      dfs(row, column - 1, pos + 1);
    board[row][column] = word[pos];
    return found;
  };
  for (let row = 0; row < n; row++) {
    for (let column = 0; column < m; column++) {
      if (board[row][column] === word[0]) {
        let isfound = dfs(row, column, 0);
        if (isfound) {
          return true;
        }
      }
    }
  }
  return false;
};
let board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
let word = "ABCB";
console.log(exist(board, word));
