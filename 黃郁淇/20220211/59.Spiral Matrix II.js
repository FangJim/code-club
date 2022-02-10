/**
 * @param {number} n
 * @return {number[][]}
 */
/*
 var generateMatrix = function(n) {
    const m = n;//有幾行,且一行裡面有幾個數字
    let arr = Array.from(Array(m), () => new Array(m));//對應輸入的數字開出相對應的矩陣大小
    console.log(arr);
    let a=n;
    let b=0;
    if(m==1) return [[1]]
    else if(m==2) return [[1,2],[4,3]]
    else{
        for(let i =0;i < m;i++){
            for(let j=0;j<m;j++){
                if(i==0){           //第一行
                    arr[0][j]=j+1;
                }
                else if(i==m-1){    //最後一行
                    arr[m-1][j]=m+((m-1)*2)-j
                }
                else{               //中間
                    if(b==m-1)
                        arr[i][j]==m+i
                    else
                        arr[i][j]=m+((m-1)*2)+a-2+b
                }
            }
            b++
        }
    }
    return arr;
};
console.log(generateMatrix(3));
*/
/*
n=3
1   2   3      [1~n]
8   9   4      [n+((n-1)*2)+n-2,n+(n-1)*2+(n-2)+1,n+1]5
7   6   5      [n+((n-1)*2),n+((n-1)*2)-1,n+((n-1)*2-2]
output [1,2,3],[8,9,4],[7,6,5]

n=4
1  2  3  4      [1~n]
12 13 14 5      [n+(n-1)*2+2,n+(n-1)*2+3,n+(n-1)*2+4,n+1]7
11 16 15 6      [n+((n-1)*2)+1,n+((n-1)*2)+1+(n-1)+(n-2),n+((n-1)*2)+1+(n-1)+(n-2)-1,n+2]
10  9  8 7      [n+((n-1)*2),n+((n-1)*2)-1,n+((n-1)*2-2,n+((n-1)*2-3]
output [1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]

n=5
1   2   3   4   5   [1~n]9
16  17  18  19  6   [n+(n-1)*2+(n-2),n+(n-1)*2+(n-2)+1,n+(n-1)*2+(n-2)+2,n+(n-1)*2+(n-2)+3,n+1]
15  24  25  20  7   [n+((n-1)*2)+2,n+((n-1)*2)+2+(n-1)+(n-2),n+((n-1)*2)+2+(n-1)+(n-2)-1,n+((n-1)*2)+2+(n-1)+1,n+2]
14  23  22  21  8   [n+((n-1)*2)+1,n+((n-1)*2)+1+((n-1)*2)+(n-2),n+((n-1)*2)+1+((n-1)*2)+(n-2)-1,n+((n-1)*2)+1+((n-1)*2)+(n-2)-2,n+3]
13  12  11  10  9   [n+((n-1)*2),n+((n-1)*2)-1,n+((n-1)*2-2,n+((n-1)*2-3,n+((n-1)*2-4]
output [1,2,3,4,5],[16,17,18,19,6],[15,24,25,20,7],[14,23,22,21,8],[13,12,11,10,9]

*/
var generateMatrix = function(n) {
    let max=n*n
    let number=1
    let ans = Array.from(Array(n), () => new Array(n));//對應輸入的數字開出相對應的矩陣大小
        //順序：右下左上
    let right=0//橫的頭
    let down=0
    let Sumright=n-1//橫的尾
    let SunDown=n-1
    while(number<=max){
        for(let i=right;i<=Sumright;i++)//右
        {
            ans[right][i]=number
            number++
        }
        down++//down++是因為要表示第一列結束要二列尾端往下
        for(let i=down;i<=SunDown;i++){//下
            ans[i][SunDown]=number
            number++
        }
        Sumright--//表示到了直的最底部，要從底部右邊一格開始
        for(let i=Sumright;i>=right;i--){//左
            ans[SunDown][i]=number
            number++
        }
        SunDown--
        for(let i=SunDown;i>=down;i--){//上
            ans[i][right]=number
            number++
        }
        right++
    }
        console.log(ans);
};
console.log(generateMatrix(3));