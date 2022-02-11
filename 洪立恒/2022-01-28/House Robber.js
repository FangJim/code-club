/**
 * @param {number[]} nums
 * @return {number}
 */
// class House {
//     constructor(number) {
//         this.money = number
//         this.robbed = false
//     }
// }

//dynamic programming
//動態規劃
var rob = function(nums) {
    let NumsLength = nums.length
    if (NumsLength == 0) return 0
    if (NumsLength == 1) return nums[0]

    let RobHouse = new Array(NumsLength).fill(0);
    //選擇偷第i間 -> rob[i] = nums[i] + rob[i-2] (隔一間才能再偷)不動i-1間
    //選擇偷第i-1間 -> rob[] = rob[i-1]

    //第一間不受影響
    RobHouse[0] = nums[0]

    //兩間選一間偷
    RobHouse[1] = Math.max(nums[0], nums[1])

    //第三間以後的選擇(normal)
    for (let i = 2; i < NumsLength; i++) {
        //第i間時 比較偷該間加上i-2間錢多 還是 i-1那間多
        RobHouse[i] = Math.max(nums[i] + RobHouse[i - 2], RobHouse[i - 1])
    }
    return RobHouse[NumsLength - 1]
};

// function createMap(nums, NumsLength) {
//     const map = new Map()
//     for (let i = 0; i < NumsLength; i++) {
//         const house = new House(nums[i])
//         map.set(i, house)
//     }
//     return map
// }

//          1  2  3  4  5
let nums = [2, 1, 1, 2, 3]

//Step 1 => [2,2,0,0,0]
//Step 2 => rob[2] => [2,2,3,0,0] (nums[2]+rob[0](1+2) > rob[1](2))
//Step 3 => rob[3] => [2,2,3,4,0] (nums[3]+rob[1](2+2) > rob[2](3))
//Step 4 => rob[4] => [2,2,3,4,6] (nums[4]+rob[2](3+3) > rob[3](4))
console.log(rob(nums))