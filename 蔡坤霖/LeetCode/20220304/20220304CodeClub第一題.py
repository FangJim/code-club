class Solution(object):
    def Palindrome(self, s, left, right): #用來判斷是否為回文
        while left >= 0 and right < len(s) and s[left] == s[right]: #left往左去判斷，right往右去判斷。判斷字元是否相同
            left -= 1 
            right += 1
        return s[left+1:right] #left + 1 是因為要變回最後一個字元正確的index值，right不用便是因為語法不包含結尾值

    def longestPalindrome(self, s):
        """
        :type s: str
        :rtype: str
        """
        ans = ""
        for i in range(len(s)):
            ans = max(ans, self.Palindrome(s, i, i),#奇數情況，如aba；偶數情況，如bb
                      self.Palindrome(s, i, i+1), key=len) #key=len，內建，用來計算字串長度
        return ans


