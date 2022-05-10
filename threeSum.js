var threeSum = function(nums) {
    let array = []
    let returner = []
    let duplicate = false
    for(i=0;i<nums.length;i++){
        for(j=i+1;j<nums.length;j++){
            for(k=j+1;k<nums.length;k++){
                let temp = []
                //console.log(nums[i], nums[j], nums[k], array)
                if(nums[k]+nums[j]+nums[i]===0){
                    temp.push(nums[i])
                    temp.push(nums[j])
                    temp.push(nums[k])
                    temp.sort()
                    array.push(temp)
                }
            }
        }
    }
    console.log(array)
    for(i=0;i<array.length;i++){
        for(j=0;j<returner.length;j++){
            if(JSON.stringify(array[i])==JSON.stringify(returner[j])){
                duplicate = true
            }
        }
        if(duplicate==false){
            returner.push(array[i])
        }else{
            duplicate=false
        }
    }
    return returner
};
/* console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSum([0,0,0,0])) */
console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]))
