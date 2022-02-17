const merge = (nums1, m, nums2, n) => {
    let insertIndex = m + n - 1;
    m--; n--;
    while (n >= 0) {//have nums to insert
        if (nums1[m] > nums2[n]) {
            nums1[insertIndex] = nums1[m]
            m--;
        }
        else {
            nums1[insertIndex] = nums2[n]
            n--;
        }
        insertIndex--;
    }
};