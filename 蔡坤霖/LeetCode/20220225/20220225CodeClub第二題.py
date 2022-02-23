import numpy


class Solution(object):
    def exist(self, board, word):
        """
        :type board: List[List[str]]
        :type word: str
        :rtype: bool
        """
        for height in range(len(board)):
            for width in range(len(board[0])):
                if self.dfs(board, height, width, word):
                    return True
        return False

    def dfs(self, board, height, width, word):
        board = numpy.array(board)
        if height<0 or height>=len(board) or width<0 or width>=len(board[0]):
            return False
        if board[height][width] == word[0]:
            if not word[1:]:
                return True
            board[height][width] = ' '
            if self.dfs(board, height+1, width, word[1:])or self.dfs(board, height-1, width, word[1:]) or self.dfs(board, height, width+1, word[1:]) or self.dfs(board, height, width-1, word[1:]):
                return True
            board[height][width] = word[0]
            return False
        else:
            return False