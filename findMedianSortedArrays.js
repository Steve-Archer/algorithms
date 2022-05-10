const findMedianSortedArrays = (nums1, nums2) => {
    let total = nums1.length + nums2.length
    let arr = [];
    let median
    let nums1Index = 0;
    let nums2Index = 0;
    while(nums1Index<nums1.length&&nums2Index<nums2.length){
        if(nums1[nums1Index]<nums2[nums2Index]){
            arr.push(nums1[nums1Index]);
            nums1Index++;
        }
        else{
            arr.push(nums2[nums2Index]);
            nums2Index++;
        }  
    }
    while(nums1Index<nums1.length){
        arr.push(nums1[nums1Index]);
        nums1Index++;
    }
    while(nums2Index<nums2.length){
        arr.push(nums2[nums2Index]);
        nums2Index++;
    }
    if(total % 2 != 0){
        let mid = Math.floor(total/2)
        median = arr[mid]
    }
    else{
        let mid = total/2
        median = (arr[mid-1]+arr[mid])/2
    }
    return median
};
let x =[1,2]
let y = [3,4]
let z = [5]
console.log(findMedianSortedArrays(x,y))
console.log(findMedianSortedArrays(y,z))