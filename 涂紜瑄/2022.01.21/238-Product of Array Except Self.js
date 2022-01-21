/**
 * https://leetcode.com/problems/product-of-array-except-self/
 * @param {number[]} nums
 * @return {number[]}
 */
//預設nums=[1,2,3,4]
var productExceptSelf = function(nums) {
    let left=[];
    let right=[];
    let result=[];
    let n=nums.length;
    left[0]=1;
    right[n-1]=1;
    
    for(let i=1; i<n; i++){
        left[i] = nums[i-1] * left[i-1];
        //預設left[0]=1
        //left[1]=nums[0]*left[0]=1
        //left[2]=nums[1]*left[1]=2=(1*2)
        //left[3]=nums[2]*left[2]=6=(1*2*3)
    }
    for(let i=n-2; i>=0; i--){
        right[i] = nums[i+1] * right[i+1];
        //預設right[3]=1
        //right[2]=nums[3]*right[3]=4
        //right[1]=nums[2]*right[2]=12=(3*4)
        //right[0]=nums[1]*right[1]=24=(2*3*4)
        
    }
    for(let i=0;i<n;i++){
        result[i]=left[i]*right[i];
        //result[0]=2*3*4=24
        //result[1]=1*3*4=12
        //result[2]=1*2*4=8
        //result[3]=1*2*3=6
    }
    return result;
};