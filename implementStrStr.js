// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, 
// or -1 if needle is not part of haystack. LOWERCASE only

const strStr = (haystack, needle) =>{
    for(i=0;i<haystack.length;i++){
        let count = 0, temp = ""
        while(count<needle.length){
            if(haystack[i+count]!=undefined){
                temp+=haystack[i+count]
            }
            count++
        }
        if(temp == needle) return i
    }
    return -1
}
console.log(strStr("haystack", "st"))



const strStrInPlace = (haystack, needle) =>{
    let n = needle.length
    for(i=0;i<haystack.length;i++){
        if(needle==haystack.substring(i,n+i))return i
    }
    return -1
}
console.log(strStrInPlace("haystack", "st"))