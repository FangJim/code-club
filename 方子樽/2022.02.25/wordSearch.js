const exist = function (board, word) {
    const row = board.length;
    const column = board[0].length

    const dfs = (i, j, pos) => {
        //判斷邊界及值是否相同
        if (i === row || i < 0 || j === column || j < 0
            || board[i][j] !== word[pos]) {
            return false
        }

        //搜索結束
        if (pos === word.length - 1) return true

        //for stop searching again
        board[i][j] = '#';

        const find = dfs(i + 1, j, pos + 1) ||
            dfs(i - 1, j, pos + 1) ||
            dfs(i, j + 1, pos + 1) ||
            dfs(i, j - 1, pos + 1)

        //change back
        board[i][j] = word[pos]

        return find;
    }
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (board[i][j] === word[0]) {
                if (dfs(i, j, 0)) return true
            }
        }
    }
    return false
};