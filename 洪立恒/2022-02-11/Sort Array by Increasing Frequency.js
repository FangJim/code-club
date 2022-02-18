/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
    let NumsLength = nums.length
    let Opt = []
    let Compare = new Map()
    for(let i = 0;i<NumsLength;i++){
        if(!Compare.has(nums[i])){
            Compare.set(nums[i],1)
        }else{
            Compare.set(nums[i],Compare.get(nums[i])+1)
        }
    }
    console.table(Compare)
    let Temp = Array.from(Compare)
    Temp.sort(function(a,b){
        if(a[1] == b[1]){
            return b[0] - a[0]
        }else{
            return a[1] - b[1]
        }
    })
    console.table(Temp)

    for(let i =0;i<Temp.length;i++){
        for(let j = 0;j<Temp[i][1];j++){
            Opt.push(Temp[i][0])
        }
    }
    return Opt
};

console.log(frequencySort([2,3,1,3,2]))