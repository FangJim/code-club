/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var replaceElements = function(arr) {
    var a=arr.length
    if(a==1){
        arr[0]=-1
        return arr
    }
    for(let i=0;i<a;i++)
    {
        if(i==a-1){
            arr[i]=-1
            return arr
        }
        else{
            arr[i]=0
            for(let j=i+1;j<a;j++){
                arr[i]=Math.max(arr[i],arr[j])

            }    
        }
    }
    
};