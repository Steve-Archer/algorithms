/* const combinationSum = (candidates, target) => {
    let result = []
    for(let i=0;i<candidates.length;i++){
        let temp = target, combo = []
        console.log(temp, candidates[i])
        while(temp>=0){
            if(temp == 0) {
                result.push(combo)
                console.log("result ", result)
            }    
            temp = temp - candidates[i]
            combo.push(candidates[i])
            console.log(temp, combo)
        }
    }
    return result
} */
var combinationSum = function(candidates, target) {
    const res = []
    const dfs = (nums, path, targ) => {
        if (targ === 0) {
            res.push(path)
            return
        }
        else if (targ < 0) return // backtrack 
        for (let i = 0; i < nums.length; i++) {
            console.log(i, path, nums[i], targ)
            dfs(nums.slice(i), [...path, nums[i]], targ - nums[i])
        }
        
    }
    dfs(candidates, [], target)
    return res
};
console.log(combinationSum([2,3,5], 8))