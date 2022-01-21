/******************************************************************************

Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward.

For example, 121 is a palindrome while 123 is not.

*******************************************************************************/
#include <iostream> //2022.0117
#include <vector>
#include <cmath>
using namespace std;

bool isPalindrome(int x, int dup){ //duplicate 一個x
    vector<int> nums; //產生動態數字陣列，以個位數方式紀錄 x的 backward
    int check = 0;
    int times = 0; //紀錄數字x 的位數
    while(x != 0)
    {
        nums.push_back(x % 10); // if x= 123, nums = [3, 2, 1]
        x /= 10;
        times++;
    }
    for(auto a : nums)
    {
        check += a*(pow(10, times-1)); //利用 nums及 times將 x的 backward重建，並稱為check
        times--;
    }
    check == dup ? return true : return false; //確認check 與duplicate 是否回文
}

int main(){
    int x;
    cin >> x;
    (x > 0 && isPalindrome(x, x)) ? cout << "true" : cout << "false"; //負數不可能回文
}

