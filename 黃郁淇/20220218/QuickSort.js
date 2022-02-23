function QuickSort(arr){
    if(arr.length<=1)
        return arr
    const pivot=arr[arr.length-1]
    let left = []; 
    let right = []; 
    for(let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
            left.push(arr[i])
      } else {
            right.push(arr[i])
      }
    }

   return QuickSort(left).concat(pivot, QuickSort(right))//合併陣列
    
}
console.log(QuickSort([1,2,5,3,10,2,6,11]))
/**
 *  const back=0//計算說原本的基準點經過排序去到哪裡了
    for(let i=0;i<arr.length;i++){
        if(arr[i]>pivot){
            arr.splice(i,1,arr[i])
            back++
        }
        else if(arr[i]<pivot){
            arr.unshift(arr[i])
            arr.splice(i,1)
        }
    }
 */