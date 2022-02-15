function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const front = [];
    const end = [];
    const pivot = arr[arr.length - 1];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            front.push(arr[i])
        } else {
            end.push(arr[i])
        }
    }
    return [...quickSort(front), pivot, ...quickSort(end)]
}
console.log(quickSort([1, 2, 5, 3, 10, 2, 6, 11]))