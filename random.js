// get a random number between numbers 1 and n
const random = n => {
        let num1 = Math.ceil(Math.random()*n)
    return num1
}
console.log(random(100))