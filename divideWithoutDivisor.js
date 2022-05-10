// Given two integers dividend and divisor, divide two integers without using multiplication, division, and mod operator.

const divide = (dividend, divisor) =>{
    if(divisor==0) return 0
    let product = 0, negative = false
    if(dividend<0&&divisor>0) negative = true
    if(divisor<0&&dividend>0) negative = true
    dividend = Math.abs(dividend)
    divisor = Math.abs(divisor)
    while(dividend>=divisor){
        dividend = dividend - divisor
        product++
    }
    if(negative)product = product-product-product
    return product
}
console.log(divide(9,3))
console.log(divide(-9,3))
console.log(divide(-9,-3))
console.log(divide(9,-3))
console.log(divide(10, 3))
console.log(divide(9, 0))
console.log(divide(9, 2))
console.log(divide(-2147483648, -1))