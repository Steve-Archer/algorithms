const maxArea = function (height) {
    let longest
    let smallerOfTwo
    for (i = 0; i < height.length; i++) {
        let iLongest
        for (j = i + 1; j < height.length; j++) {
            if (height[i] < height[j]) {
                smallerOfTwo = height[i]
            } else {
                smallerOfTwo = height[j]
            }
            if(iLongest==undefined)iLongest = smallerOfTwo * (j - i)
            else{
                if(smallerOfTwo * (j-i) > iLongest) iLongest = smallerOfTwo * (j-i)
            }
        }
        if (longest == undefined){
            longest = iLongest
        }
        else{
            if(iLongest>longest)longest=iLongest
        }
    }
    return longest
};
let x = [1, 8, 16, 2, 5, 4, 8, 3, 7, 10]
console.log(maxArea(x))