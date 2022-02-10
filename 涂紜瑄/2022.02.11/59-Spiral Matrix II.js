/**
 * 題目https://leetcode.com/problems/spiral-matrix-ii/
 * 1.https://www.cnblogs.com/grandyang/p/4362813.html
 * 2.https://ithelp.ithome.com.tw/articles/10185594
 * @param {number} n
 * @return {number[][]}
 */

 var generateMatrix = function(n) {
    //建立空矩陣
    let matrix = new Array(n).fill(null).map(() => new Array(n));
    
    //數字填入矩陣
    let val=1;
    let top=0, bottom=n-1, left=0, right=n-1;
    
    while(left < right){
        //matrix[i][j]
        //由左到右
        for(let j=left; j<right; j++){
            matrix[top][j]=val++;
        }
        //由上到下
        for(let i=top; i<bottom; i++){
            matrix[i][right]=val++;
        }
        //由右到左
        for(let j=right; j>left; j--){
            matrix[bottom][j]=val++;
        }
        //由下到上
        for(let i=bottom; i>top; i--){
            matrix[i][left]=val++;
        }

        //內縮一圈
        left++;
        right--;
        top++;
        bottom--;
    }
    if(n%2==1){
        matrix[Math.floor(n/2)][ Math.floor(n/2)]=n*n;
    }

    return matrix;
    
};
console.log(generateMatrix(4));
console.log(generateMatrix(5));