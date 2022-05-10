const lengthOfLongestSubstring = s => {
    if(s.length==0)return 0
    let set = new Set()
    let total = 0
    let starter = 0
    for(let i=0;i<s.length;i++){
        let char = s[i]
        while(set.has(char)){
            set.delete(s[starter])
            starter++
        }
        set.add(char)
        if(total<i-starter+1){
            total = i-starter+1
        }
    }
    return total
}
console.log(lengthOfLongestSubstring("abcabcbb"))
