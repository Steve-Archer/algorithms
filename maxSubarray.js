// Given an integer array nums, find the contiguous subarray (containing at least one number) 
// which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

// Constraints: 
//      1 <= nums.length <= 10^5 
//      -10^4 <= nums[i] <= 10^4


// slower O(n^2)
const maxSubArray = nums => {
    if(nums.length == 1) return nums[0]
    let sum = nums[0]
    for(let i=0;i<nums.length;i++){
        let temp = nums[i]
        if(temp>sum) sum = temp
        for(let j=i+1;j<nums.length;j++){
            temp += nums[j]
            if(temp>sum) sum = temp            
        }
        console.log(i, sum)
    }
    return sum
}
console.log(maxSubArray([1,2,3]))
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArray([-2,-1]))


// faster O(n)
const maxSubArrayB = nums => {
    let sum = nums[0]
    let checkSum = nums[0];
    for(let i = 1; i < nums.length; i++) {
        checkSum = Math.max(nums[i], checkSum + nums[i])
        sum = Math.max(checkSum, sum)
        console.log(i, checkSum, sum)
    }
    return sum;
};

console.log(maxSubArrayB([1,2,3]))
console.log(maxSubArrayB([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maxSubArrayB([-2,-1]))