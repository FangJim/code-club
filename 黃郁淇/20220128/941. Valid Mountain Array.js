/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var validMountainArray = function(arr) {
    let number=0;
    let max=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>=max)
        {
            number=i;
            max=arr[i];
        }
    }
    console.log(number);
    if(number==0 || number==arr.length-1)
        return false;
    else{
        for(let i=0;i<number;i++){
            if(arr[i]>=arr[i+1])
                return false
        }
        for(let i=number;i<arr.length;i++){
             if(arr[i]<=arr[i+1])
                return false
        }
        return true
    }

    
};