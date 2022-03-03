class Solution(object):
    def findRelativeRanks(self, score):
        """
        :type score: List[int]
        :rtype: List[str]
        """
        store_data = {} #用字典來儲存score的值，以及相對應的名次
        s = sorted(score, reverse=True) #把sorted存成另外一個陣列。使用sorted不會去改變到原本score的排列
        ans=[]
        for i in range(len(s)):
            if i == 0:
                store_data[s[i]] = 'Gold Medal'
            elif i == 1:
                store_data[s[i]] = 'Silver Medal'
            elif i == 2:
                store_data[s[i]] = 'Bronze Medal'
            else:
                store_data[s[i]] = str(i+1)
        for i in score: #拿範例來舉例，i的值會是 10,3,8,9,4
            ans.append(store_data[i])
        return ans
