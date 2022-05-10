const longestCommonPrefix = strs => {
    let result = strs[0], j = 0, i = 1
    while(i<strs.length){
        while(result[j]!= undefined||strs[i][j]!=undefined){
            if(result[j] != strs[i][j]){
                result = result.substring(0, j)
            }
            j++
        }
        j=0
        i++
    }
    return result
}
console.log(longestCommonPrefix(["flower", "flow", "flog"]))
console.log(longestCommonPrefix(["flower", "cat", "dog"]))
console.log(longestCommonPrefix(["flower", "fire", "flag"]))
