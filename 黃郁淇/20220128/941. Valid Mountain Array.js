/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var validMountainArray = function(arr) {
     //先找到最高的點，在看前面是否正確
    let number=0;//最大值的位置
    let max=arr[0];//最大值的值
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max)
        {
            number=i;
            max=arr[i];
        }
    }
    //console.log(number);
    //如果最高點在第一個或是最後一個就是錯的
    if(number==0 || number==arr.length)
        return false;
    else{
        for(let i=0;i<number;i++){//從最頭往後查到最高點
            if(arr[i]>=arr[i+1])
                return false
        }
        for(let i=number;i>arr.length;i--){
             if(arr[i]<=arr[i-1])
                return false
        }
        return true
    }

    
};