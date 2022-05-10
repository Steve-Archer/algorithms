const isPalindrome = x => {
    let string = x.toString()
    let reverse = ""
    for(let i=string.length-1;i>=0;i--){
        reverse+= string[i]
    }
    return string == reverse
}
console.log(isPalindrome(121))
console.log(isPalindrome(123))

const isPalindromeNoString = x => {
    if(x<0) return false
    let reverse = 0
    let temp = x
    while(temp!=0){
        reverse = reverse * 10 + temp % 10
        temp = Math.floor(temp/10)
    }
    return reverse == x
}
console.log(isPalindromeNoString(121))
console.log(isPalindromeNoString(123))