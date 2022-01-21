/**
 * https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/
 * @param {number[]} position
 * @return {number}
 * 移動兩個位置cost=0,移動一個位置cost=1
 * 奇數位到奇數位=0,偶數位到偶數位=0,奇數位到偶數位=1,偶數位到奇數位=1
 */

var minCostToMoveChips = function(position) {
    let oddCount=0;  //紀錄在奇數位的數量
    let evenCount=0; //紀錄在偶數位的數量
    
    for(let i=0;i<position.length;i++){
        if(position[i]%2!=0) oddCount++;
        else evenCount++;
    }
    
    return Math.min(oddCount,evenCount);
};