const reverse = x => {
    let result = 0
    let negative = false
    if(x<0){ 
        negative = true
        x = Math.abs(x)
    }
    while(x!=0){
        result = result * 10 + x % 10
        x = Math.floor(x/10)
    }
    if (negative==true) result = result*(-1)
    if(result>(2**31)-1||result<-1*(2**31)) return 0
    return result
}
console.log(reverse(123))
console.log(reverse(-2330))