var findMedianSortedArrays = function(nums1, nums2) {
    const arr = [...nums1, ...nums2].sort((a, b) => a - b);
    
    return arr.length % 2 !== 0 ? arr[Math.ceil(arr.length / 2) - 1] : ((arr[Math.ceil(arr.length / 2) - 1] + arr[Math.ceil(arr.length / 2)]) / 2);
};

