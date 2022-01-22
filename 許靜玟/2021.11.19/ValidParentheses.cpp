/******************************************************************************
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
******************************************************************************/
#include <iostream> //2022.0115
using namespace std;

bool isValid(char c1, char c2){
    if(c1 == '(' && c2 != ')') return false;
    else if(c1 == '[' && c2 != ']') return false;
    else if(c1 == '{' && c2 != '}') return false;
    else return true;
}

int main(){
    string str;
    string ans = "true"; //預設答案為真
    cin >> str; //數入字串
    cout << "s = \"" << str << "\"" << endl;
    if(str.length() % 2 == 0) //字串長度必為偶數（成對）
    {
        for(int i=0; i< str.length(); i+=2) //一次帶入並判斷兩個字符
        {
            if(isValid(str[i], str[i+1]) == 0) //if false
            {
                ans = "false"; //如果ans 都沒被改到，為true
                break;
            }
        }
        cout << ans;
    }
    else cout << "false";
}



