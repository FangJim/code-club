class Solution:
    def isHappy(self, n: int) -> bool:
        count = n
        for x in range(6):
            count = sum(pow(int(i), 2) for i in list(str(count))) 
            if count == 1: return 1
        return 0
