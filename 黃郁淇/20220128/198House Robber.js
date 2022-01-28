/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
     //看單數比較大還是雙數比較大
    let num=0;//單數總和
    let num2=0;//雙數總和
    for(i=0;i<nums.length;i+=2){
        num+=nums[i];
    }
    for(i=1;i<nums.length;i+=2){
        num2+=nums[i];
    }
    if(num>num2)
        return num
    else
        return num2
};