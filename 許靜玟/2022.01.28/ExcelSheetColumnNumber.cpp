class Solution {
public:
    int titleToNumber(string colTitle) {
        int ans = 0;
        for(int i=0; i< colTitle.length(); i++){
                if(i!=colTitle.length()-1) 
                    ans += (colTitle[i]-64)*pow(26, colTitle.length()-i-1);
                else 
                    ans += colTitle[i]-64;
        }
        return ans;
    }
};