insertionSort= arr => {
    for(i=0;i<arr.length;i++){
        let j = i
        while(j!=0&&arr[j]<arr[j-1]){
            [arr[j],arr[j-1]]=[arr[j-1],arr[j]]
            j--
            console.log(i,j, arr)
        }
    }
    return arr
}
console.log(insertionSort([4,5,2,9,1,3]))