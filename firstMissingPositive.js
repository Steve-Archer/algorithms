// Given an unsorted integer array nums, return the smallest missing positive integer.

// You must implement an algorithm that runs in O(n) time and uses constant extra space.

// Example 1:
// Input: nums = [1,2,0]
// Output: 3

// Example 2:
// Input: nums = [3,4,-1,1]
// Output: 2

// Example 3:
// Input: nums = [7,8,9,11,12]
// Output: 1

// Constraints:
// 1 <= nums.length <= 5 * 105
// -231 <= nums[i] <= 231 - 1




const firstMissingPositive = nums => {
    nums = nums.sort((a,b)=>{return a-b})
    let output = 1
    for(let i=0;i<nums.length;i++){
        if(i==nums.length-1&&output==nums[i]) return output+1
        else if(nums[i]==output){
            output++
        }
        else if(nums[i]>output) return output
    }
    return output
}
console.log(firstMissingPositive([1,2,0])) // 3
console.log(firstMissingPositive([3,4,-1,1])) // 2
console.log(firstMissingPositive([7,8,9,11,12])) // 1
