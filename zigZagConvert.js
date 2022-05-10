const convert = (s, numRows) => {
    if(numRows==1) return s
    const arr = new Array(numRows).fill("")
    let result = ""
    let currentRow = 0
    let down = true
    for(let i=0;i<s.length;i++){
        if(down==true){
            if(currentRow==numRows-1){
                down=false
                arr[currentRow] += s[i]
                currentRow--
            }else{
                arr[currentRow] += s[i]
                currentRow++
            }
            console.log(i, arr, currentRow)
        }else{
            if(currentRow==0){
                down=true
                arr[currentRow] += s[i]
                currentRow++
            }else{
                arr[currentRow] += s[i]
                currentRow--
            }
            console.log(i, arr, currentRow)
        }
    }
    for(i=0;i<numRows;i++){
        result += arr[i].toString()
    }
    return result
}
console.log(convert("paypalishiring", 3))