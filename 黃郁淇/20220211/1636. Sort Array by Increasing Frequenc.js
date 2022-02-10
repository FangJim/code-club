/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var frequencySort = function(nums) {
    let time={};
    nums.forEach((e) => {
        if (time[e]) {
            time[e]++;
        } else {
            time[e] = 1;
        }
      });      
        console.log(time)
    nums.sort(function(a, b) {
            return b-a      
})
    return nums
};
console.log(frequencySort([2,3,1,3,2]))
/*
按照出現次數由小到大（1~n）
如果出現相同次數，數字大的放在前面
先讀取每一個出現的次數
有小到大
其中如果相同次數 比較大小
*/