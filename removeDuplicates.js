const removeDuplicates = nums => {
    for(i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            if (nums[i]==nums[j]){
                
                nums[j]=101
            }
        }
    }
    for(i=0;i<=nums.length;i++){
        if (nums[i]==101){
            nums.splice(i,1)
            i--
        }
    }
    return nums
}
console.log(removeDuplicates([1,1,2,3,4,4,5]))
console.log(removeDuplicates([1,1,1,2,3,4,4,5]))