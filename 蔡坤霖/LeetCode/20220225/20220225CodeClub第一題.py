class Solution(object):
    def replaceElements(self, arr):
        """
        :type arr: List[int]
        :rtype: List[int]
        """
        max_value = -1
        for i in range(len(arr)-1,-1,-1): 
            temp = arr[i]
            arr[i]=max_value
            if temp > max_value:
                max_value = temp
        return arr

def main():
    array = [17,18,5,4,6,1]
    s=Solution
    s.replaceElements(array,array)
    print(array)
main()
