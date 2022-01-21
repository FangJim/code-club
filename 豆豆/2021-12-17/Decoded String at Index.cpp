//
//  main.cpp
//  Test
//
//  Created by 洪立恒 on 2021/12/17.
//
#include <cstring>
#include <iostream>
#include <string>
using namespace std;

class Solution {
public:
    string decodeAtIndex(string s, int k) {
        string temp = "";
        string stemp = "";
        char Ans[k];
        for(int i = 0 ; i<s.length();i++){
            if(k==1){
                stemp = s[0];
                return stemp;
            }
            if(isdigit(s[i])){
                for(int a = 0;a<s[i]-'0';a++){
                    stemp += temp;
                }
                temp = stemp;
                stemp = "";
            }else temp += s[i];
            if(temp.length()>=k){
                for(int j = k-1;j<=k;j++){
                    Ans[j] = temp[j];
                }
            }
        };
        temp = Ans[k-1];
        return temp;
    };
};

int main(){
    string ss = "leet2code3";
    int kk = 10;
    Solution Ans;
    cout<< Ans.decodeAtIndex(ss, kk)<<endl;
    
};


