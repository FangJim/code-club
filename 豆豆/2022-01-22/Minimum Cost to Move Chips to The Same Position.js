/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
    let odd = 0,
        even = 0
    for (let i = 0; i < position.length; i++) {
        (position[i] % 2 == 0) ? odd++ : even++;
    }
    return Math.min(odd, even)
};

//偶數到偶數 奇數到奇數 cost = 0
//偶數到奇數 奇數到偶數 cost = 1
//1->3->5 ... 不用花費
//2->4->6 ... 不用花費
//111,333 全部移到 222 or 4 需要6步
//222,4 全部移到111 or 333 需要4步
//比較下 移動偶數cost較少 選擇移動偶數
let position = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4]
console.log(minCostToMoveChips(position))