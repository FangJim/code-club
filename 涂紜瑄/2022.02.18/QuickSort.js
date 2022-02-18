/**
 * https://oldmo860617.medium.com/js-%E5%AD%B8%E8%B3%87%E6%96%99%E7%B5%90%E6%A7%8B%E8%88%87%E6%BC%94%E7%AE%97%E6%B3%95-1-%E5%BF%AB%E9%80%9F%E6%8E%92%E5%BA%8F%E6%B3%95-quick-sort-8904e226ad5d
 * 選定一個基準值 (Pivot)
 * 將比基準值 (Pivot) 小的數值移到基準值左邊，形成左子串列
 * 將比基準值 (Pivot) 大的數值移到基準值右邊，形成右子串列
 * 分別對左子串列、右子串列作上述三個步驟
 * 直到左子串列或右子串列只剩一個數值或沒有數值
 * 快速排序法的效率和基準值 (Pivot) 的選擇息息相關，每次選擇的基準值 (Pivot) 愈接近數列的平均值或中位數愈好。
 */

function quickSort(arr) {
  if (arr.length <=1 ) {
    return arr;
  }
  
  let pivot = arr[0]; // 基準值
  let left = [];  // 用來儲存比基準值小的元素
  let right = []; // 用來儲存比基準值大的元素

  for(let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]) //加入左子串列
    } else {
      right.push(arr[i]) //加入右子串列
    }
  }
  return quickSort(left).concat(pivot, quickSort(right)); //合併
  // return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([1,2,5,3,10,2,6,11]));  //[1,2,2,3,5,6,10,11]
console.log(quickSort([89,34,66,12,6,50,1])); //[1,6,12,34,50,66, 89]