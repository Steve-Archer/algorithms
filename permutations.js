var permute = function(nums) {
    let res = [];
    backtrack(nums, {}, [], res)
    return res
};

function backtrack(nums, visited, path, res) {
    console.log(path, visited, res)
    if (path.length === nums.length) res.push(path.slice())
    for (let i=0; i<nums.length; i++) {
        // skip 
        if (visited[i]) continue
        
        // traverse down 
        path.push(nums[i])
        visited[i] = true
        backtrack(nums, visited, path, res)
        
        // revert to previous level
        path.pop()
        visited[i] = false
    }
}
console.log(permute([1,2,3]))
console.log(permute([4,5,6,7]))