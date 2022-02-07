/**
 * @param {string} columnTitle
 * @return {number}
 */
 var titleToNumber = function(columnTitle) {
    let ans=1;//存放最後的答案
    let num;//暫存答案
    if(columnTitle.length==1)//首先判斷是否是一位數
    {
        return columnTitle.charCodeAt(0)%64;//是的話就直接輸出，利用charCodeAt方式將英文轉換成數字EX:A=65,B=66，題目中A=1,B=2，故最後的地方除64的餘數。
    }
    else//否的話就跑迴圈
    {
        for(let i = 0;i<columnTitle.length-1;i++)
        {
            num=(columnTitle.charCodeAt(i)%64)*26;
            ans=num*ans;
        }
        ans+=columnTitle.charCodeAt(columnTitle.length-1)%64;
        return ans;
    }

};