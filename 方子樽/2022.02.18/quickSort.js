function quickSort(arr, left, right) {
    if (left < right) {
        const monument = partition(arr, left, right)//立碑
        quickSort(arr, left, monument)//left
        quickSort(arr, monument + 1, right)//right
    }
    return arr
}

function partition(arr, left, right) {
    const pk = arr[Math.floor((left + right) / 2)];
    while (true) {
        while (arr[left] < pk) {
            left++;
        }
        while (arr[right] > pk) {
            right--;
        }
        if (left >= right) {
            return right;
        }
        //解構賦值
        [arr[left], arr[right]] = [arr[right], arr[left]]
    }
}