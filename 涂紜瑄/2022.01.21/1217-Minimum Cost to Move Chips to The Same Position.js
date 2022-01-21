/**
 * @param {number[]} position
 * @return {number}
 */
//移動兩個位置花費0，移動一個位置花費1
//奇數位到奇數位=0,偶數位到偶數位=0,奇數位到偶數位=1,偶數位到奇數位=1
var minCostToMoveChips = function(position) {
    let oddCount=0;  //紀錄奇數位數量
    let evenCount=0; //紀錄偶數位數量
    
    for(let i=0;i<position.length;i++){
        if(position[i]%2!=0) oddCount++;
        else evenCount++;
    }
    
    if(oddCount>evenCount) return evenCount;
    else return oddCount;
};