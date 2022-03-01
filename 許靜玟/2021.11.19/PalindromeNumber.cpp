/******************************************************************************

Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.

*******************************************************************************/
class Solution { //20220126
public:
    bool isPalindrome(int x) {
        if(x < 0) return false;
        else {
            string str = to_string(x);
            for(int i=0; i<= (str.length()/2) ; i++)
                if(str[i] != str[str.length()-1-i]) return false;
            return true;      
        }
    }
};