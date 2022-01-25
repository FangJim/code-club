/**
 * 1.從基數偶數下手
 * 2. 先判斷index是基數還是偶數，再去比大小，拿大的數字去更新現在的odd或是even
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let even = 0;
    let odd = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            even = Math.max(even + nums[i], odd)
        } else if (i % 2 === 1) {
            odd = Math.max(odd + nums[i], even)
        }
    }
    return Math.max(even, odd)
};