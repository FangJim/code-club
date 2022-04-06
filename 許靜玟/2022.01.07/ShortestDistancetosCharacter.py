class Solution:
    def shortestToChar(self, s: str, c: str) -> List[int]:
        idx = [i for i in range(len(s)) if s[i] == c ]
        return [min([abs(i-_idx) for _idx in idx]) for i in range(len(s))]