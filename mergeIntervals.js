const merge = intervals => {
    let result = []
    for(i=0;i<intervals.length;i++){
        let first = intervals[i][1]
        let second = intervals[i+1][0]
        if(first>=second){
            result.push([intervals[i][0],intervals[i+1][1]])
            i++
        }else{
            result.push(intervals[i])
        }
    }
    return result
}
console.log(merge([[1,3],[2,5],[10,13]]))
console.log(merge([[1,3],[4,5],[5,13]]))