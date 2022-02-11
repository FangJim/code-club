/**
 * 題目https://leetcode.com/problems/sort-array-by-increasing-frequency/
 * 參考https://iamketan.wordpress.com/2020/11/22/1636-sort-array-by-increasing-frequency-leetcode/
 * @param {number[]} nums
 * @return {number[]}
 */
 var frequencySort = function(nums) {
    let map = new Map(); // (num, frequency)
    for(let i=0;i<nums.length;i++){
        let num = nums[i];
        // 如相同則該物件存值+1，如不同則存值設為1
        map[num] = map[num] + 1 || 1
    }

    let arr=nums.sort(function(a,b){
        if(map[a]==map[b]){
            return b-a; 
        }
        else{
            return map[a]-map[b];
        }
    })

    console.log(map);
    // console.log(Object.keys(map));
    // console.log(Object.values(map));

    return arr;
};

console.log(frequencySort([-1,1,-6,4,5,-6,1,4,1]));
