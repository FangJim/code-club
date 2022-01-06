/*
class Solution {
public:
    string decodeAtIndex(string S, int K) {
        int i;
        long long tmp = 0;
        string ans = "";
        for(i=0;i<S.length(),tmp<=K;i++){
            if(isdigit(S[i])) 
                tmp *= (S[i]-'0');
            else 
                tmp++;
        }
        for(int j=i-1;j>=0;j--){
            if(isdigit(S[j])){
                tmp/=(S[j]-'0');
                K%=tmp;
            }
            else{
                if(K%tmp==0){
                    ans=S[j];
                    break;
                }
                else tmp--;
            }
        }
        return ans;
    }
};
*/