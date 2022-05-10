const search = (arr, target, start = 0, end = arr.length - 1) => {
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (target == arr[mid]) return mid
        if (target > arr[mid]) start = mid + 1
        if (target < arr[mid]) end = mid - 1
    }
    return -1
}
const firstAndLast = (arr, target) => {
    let first = search(arr, target)
    let i = 0
    while(target==arr[first-i-1]){
        i++
    }
    first-=i
    i = 0
    while(target==arr[first+i+1]){
        i++
    }
    let last = first + i
    return [first, last]
}


let nums = []
for (let i = 1; i < 20; i += 2) {
    nums.push(i)
}
console.log(search(nums, 11))
console.log(search(nums, 12))
console.log(search(nums, 13))
console.log(firstAndLast([1,3,5,5,6,7,8,8,8,9,10],8))