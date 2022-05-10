const letterCombinations = digits => {
    let phoneObj = {
        2:["abc"], 
        3:["def"], 
        4:["ghi"], 
        5:["jkl"], 
        6:["mno"], 
        7:["pqrs"], 
        8:["tuv"], 
        9:["wxyz"]
    }
    let result = []
    if(digits.toString().length==1){
        let temp1 = phoneObj[digits.toString()[0]].toString()
        for(i=0;i<temp1.length;i++){
            result.push(temp1[i])
        }
    }else if(digits.toString().length==2){
        temp1 = phoneObj[digits.toString()[0]].toString()
        temp2 = phoneObj[digits.toString()[1]].toString()
        for(i=0;i<temp1.length;i++){
            for(j=0;j<temp2.length;j++){
                result.push(temp1[i]+temp2[j])
            }
        }
    }else if(digits.toString().length==3){
        temp1 = phoneObj[digits.toString()[0]].toString()
        temp2 = phoneObj[digits.toString()[1]].toString()
        temp3 = phoneObj[digits.toString()[2]].toString()
        for(i=0;i<temp1.length;i++){
            for(j=0;j<temp2.length;j++){
                for(k=0;k<temp3.length;k++){
                    result.push(temp1[i]+temp2[j]+temp3[k])
                }
            }
        }
    }else if(digits.toString().length==4){
        temp1 = phoneObj[digits.toString()[0]].toString()
        temp2 = phoneObj[digits.toString()[1]].toString()
        temp3 = phoneObj[digits.toString()[2]].toString()
        temp4 = phoneObj[digits.toString()[3]].toString()
        for(i=0;i<temp1.length;i++){
            for(j=0;j<temp2.length;j++){
                for(k=0;k<temp3.length;k++){
                    for(l=0;l<temp4.length;l++){
                        result.push(temp1[i]+temp2[j]+temp3[k]+temp4[l])
                    }
                }
            }
        }
    }
return result
}
console.log(letterCombinations(2))
console.log(letterCombinations(23))
console.log(letterCombinations(234))
console.log(letterCombinations(2345))

// gives all combinations of up to four phone buttons