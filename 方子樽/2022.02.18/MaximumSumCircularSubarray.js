const maxSubarraySumCircular = (arr) => {
    let [curMax, curMin, gloMax, gloMin] = new Array(4).fill(arr[0]);
    let sum = arr.reduce((pre, cur) => pre + cur, 0);

    for (let i = 1; i < arr.length; i++) {
        curMax = Math.max(arr[i], arr[i] + curMax);
        gloMax = Math.max(gloMax, curMax);

        curMin = Math.min(arr[i], arr[i] + curMin);
        gloMin = Math.min(gloMin, curMin);
    }

    //sum = 最小值 => 全負數
    //Math.max(gloMax, sum - gloMin)預防最大子串列在前後端
    //sum減最小必剩最大｀
    return (sum === gloMin) ? gloMax : Math.max(gloMax, sum - gloMin);
};
console.log(maxSubarraySumCircular([5, -3, 5]));