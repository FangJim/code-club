/**
 * @param {string} columnTitle
 * @return {number}
 */
 var titleToNumber = function(columnTitle) {
    let ans=0;//存放最後的答案
    let time;//位置
    time=0;
    if(columnTitle.length==1)//首先判斷是否是一位數
    {
        return columnTitle.charCodeAt(0)%64;//是的話就直接輸出，利用charCodeAt方式將英文轉換成數字EX:A=65,B=66，題目中A=1,B=2，故最後的地方除64的餘數。
    }
    else//否的話就跑迴圈
    {

        for(let i = columnTitle.length-1;i>=0;i--)
        {
            ans+= Math.pow(26, i)*(columnTitle.charCodeAt(time)%64);
            console.log(columnTitle.charCodeAt(time)%64);
            time++;
        }
        return ans;
    }
//AB 1*26+2=28  AAA 
//ZY=701
};
console.log(titleToNumber('ZY'))