function quicksort(array) {
    //終止條件
    if (array.length <= 1) return array;

    let pk = array[0];
    let left = [];
    let right = [];

    for (let i = 1; i < array.length; i++)
        array[i] < pk ? left.push(array[i]) : right.push(array[i]);

    return quicksort(left).concat(pk, quicksort(right));
};