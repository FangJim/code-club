/**
 * https://leetcode.com/problems/excel-sheet-column-number/submissions/
 * @param {string} columnTitle
 * @return {number}
 */
 var titleToNumber = function(columnTitle) {
    let titleLength=columnTitle.length;
    let lastNumber;
    let codeNumber; 
    let multiplyNumber=0;
    let resultNumber=0;
    let count=1;
    
    if(titleLength>1){
        lastNumber=columnTitle.charCodeAt(titleLength-1)-64;  //紀錄最後一個字的編號
        for(let i=titleLength-2;i>=0;i--){
            codeNumber=columnTitle.charCodeAt(i)-64;  //紀錄當前字元編號
            multiplyNumber+=Math.pow(26,count)*codeNumber;
            count++;
        }
        resultNumber += multiplyNumber + lastNumber;
    }
    else{
        resultNumber=columnTitle.charCodeAt(0)-64;
    }
    
    return resultNumber;
};