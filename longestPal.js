const longestPalindrome = s => {
    reverse = ""
    result = ""
    for(let i=s.length-1;i>=0;i--){
        reverse+=s[i]
    }
    for(let i=0;i<s.length;i++){
        let j = s.length
        while(j>i){
            if(s.slice(i,j)==reverse.slice(s.length-j, s.length-i)&&s.slice(i,j).length>result.length){
                result = s.slice(i,j)
            }
            j--
        }
    }
    return result
}
console.log(longestPalindrome("abbdfg"))
console.log(longestPalindrome("fffabcbadfg"))