var twoSum = function(nums, target) {
    let numsEqual = []
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]==target){
                numsEqual.push(i)
                numsEqual.push(j)
                return numsEqual
            }
        }
    }
};
let a = [3,4,5,6,7]
console.log(twoSum(a, 13))
console.log(twoSum(a,11))

// returns the the two indexes whose values sum to the target
