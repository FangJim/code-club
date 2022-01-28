/**
 * https://leetcode.com/problems/excel-sheet-column-number/submissions/
 * @param {string} columnTitle
 * @return {number}
 */
 var titleToNumber = function(columnTitle) {
    let titleLength=columnTitle.length;
    let codeNumber; 
    let resultNumber=0;
    let count=0;
    
    if(titleLength>1){
        for(let i=titleLength-1;i>=0;i--){
            codeNumber=columnTitle.charCodeAt(i)-64;  //紀錄當前字元編號
            resultNumber+=Math.pow(26,count)*codeNumber;
            count++;
        }
    }
    else{
        resultNumber=columnTitle.charCodeAt(0)-64;
    }
    
    return resultNumber;
};