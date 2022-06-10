/* const groupAnagrams = function (strs) {
    const strsMap = strs.reduce((map, str) => {
        sortedStr = [...str].sort().join('');
        console.log(sortedStr)
        map.has(sortedStr) ? map.set(sortedStr, [...map.get(sortedStr), str]) : map.set(sortedStr, [str]);
        console.log(map)
        return map;
    }, new Map());
    console.log(strsMap)

    return [...strsMap.values()];
};
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))



const hashString = (key, n)=> {
    let hash = 17
    for(let i=0;i<key.length;i++){
        hash = (13 * hash * key.charCodeAt(i) % n)
    }
    return hash
}

class HashTable {
    table = new Array(113)

    setString = (key, value) => {
        const idx = hashString(key,this.table.length)
        this.table[idx] = value
    }
    getString = key => {
        const idx = hashString(key, this.table.length)
        console.log(idx, this.table[idx])
        return this.table[idx]
    }
}

const table = new HashTable()
table.setString("fName", "bobby")
table.setString("fName", "timmy")
table.setString("lName", "mrr")
table.setString("email", "mrr@mail.com")
table.setString("phone", "mrr@mail")
table.setString("check", "mrr@ma")
table.getString('fName')

 */

const binarySearch = (arr, target, start = 0, end=arr.length-1, mid = Math.floor((start+end)/2)) => {
    if(start==end&&target!=arr[mid]) return -1
    else if(target==arr[mid]){
        return mid
    }
    else if(target<arr[mid]){
        return binarySearch(arr, target, start, end=mid-1)
    }
    else {
        return binarySearch(arr, target, start=mid+1, end)
    }
}
console.log(binarySearch([3,4,5,7,8,9,10], 8))
console.log(binarySearch([3,4,5,7,8,9,10], 6))
console.log(binarySearch([3,4,5,7,8,9,10,13,15,19], 13))












