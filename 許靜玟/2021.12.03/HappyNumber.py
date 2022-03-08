class Solution:
    def isHappy(self, n: int) -> bool:
        for x in range(6):
            n = sum(pow(int(i), 2) for i in list(str(n))) 
            if n == 1: return 1
        return 0