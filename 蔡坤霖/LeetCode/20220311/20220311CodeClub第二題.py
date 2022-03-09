class Solution(object):
    def findAnagrams(self, s, p):
        """
        :type s: str
        :type p: str
        :rtype: List[int]
        """
        result = [] #儲存結果

        if len(s) < len(p): #如果p>s,回傳空結果
            return []

        count_characters_in_p = [0]*26 #儲存p的字母

        for i in p:
            count_characters_in_p[ord(i)-97] += 1 #轉換成unicode來存
            
        counter=[0]*26

        for i in range(len(p)-1):
            counter[ord(s[i])-97] += 1 #儲存s陣列的元素
            
        
        for num,elem in enumerate(s[len(p)-1:]): #
            counter[ord(elem)-97]+=1
            if count_characters_in_p==counter:
                result.append(num)
            counter[ord(s[num])-97]-=1
            
        return result