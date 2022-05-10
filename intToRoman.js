const intToRoman = num => {
    let rom = ""
    if(num>=1000){
        let m = Math.floor(num/1000)
        num = num - m*1000
        while(m>0){
            rom += "M"
            m--
        }
    }
    if(num>=500&&num<900){
        num -= 500
        rom += "D"
    }
    else if(num>=900){
        num -= 900
        rom += "CM"
    }
    else if(num<500&&num>=400){
        num -= 400
        rom += "CD"
    }
    if(num>=100){
        let c = Math.floor(num/100)
        console.log(c)
        num = num - c*100
        while(c>0){
            rom += "C"
            c--
        }
    }
    if(num>=90){
        num -= 90
        rom += "XC"
    }
    else if(num >=50&&num<90){
        num -= 50
        rom += "L"
    }
    else if(num<50&&num>=40){
        num -= 40
        rom += "XL"
    }
    if(num>=10){
        let x = Math.floor(num/10)
        num = num - x*10
        while(x>0){
            rom += "X"
            x--
        }
    }
    if(num==9){
        num -= 9
        rom += "IX"
    }
    else if(num>=5&&num<9){
        num -= 5
        rom += "V"
    }
    else if(num==4){
        num -= 4
        rom += "IV"
    }
    while(num>0){
        rom += "I"
        num--
    }
    return rom
}
let x = 2814
console.log(intToRoman(x))