const groupAnagrams = strs => {
    if(strs.length == 1) return strs
    let skip = {}
    let result = [[]]
    let groupIndex = 0
    for(let i=0;i<strs.length;i++){
        if(!(i in skip)){
            skip[i] = true
            result[groupIndex].push(strs[i])
            let key = {}
            for(let j=0;j<strs[i].length;j++){
                if(!(strs[i][j] in key)){
                    key[strs[i][j]] = true
                }
            }
            for(let j=i+1;j<strs.length;j++){
                let same = true
                for(let k=0;k<strs[j].length;k++){
                    if(!(strs[j][k] in key)) same = false
                }
                if (same == true){
                    result[groupIndex].push(strs[j])
                    skip[j] = true
                }
            }
            result.push([])
            groupIndex++
        }
    }
    result.pop()
    return result
}
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))