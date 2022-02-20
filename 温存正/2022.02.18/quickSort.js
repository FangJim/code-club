// function quickSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }
//   let preArray = [];
//   let postArray = [];
//   let pk = arr[arr.length - 1];
//   for (let i = 0; i < arr.length - 1; ++i) {
//     if (arr[i] < pk) {
//       preArray.push(arr[i]);
//     } else {
//       postArray.push(arr[i]);
//     }
//   }
//   return [...quickSort(preArray), pk, ...quickSort(postArray)];
// }
function partition(arr, l, u) {
  let pk = arr[Math.floor((l + u) / 2)];
  while (true) {
    while (arr[l] < pk) {
      l++;
    }
    while (arr[u] > pk) {
      u--;
    }
    if (l >= u) {
      return u;
    }
    let tmp = arr[l];
    arr[l] = arr[u];
    arr[u] = tmp;
  }
}
function quickSort(arr, l, u) {
  if (l < u) {
    let index = partition(arr, l, u);
    quickSort(arr, l, index);
    quickSort(arr, index + 1, u);
  }
  return arr;
}
let arr = [1, 1, 1];
console.log(quickSort(arr, 0, arr.length - 1));
