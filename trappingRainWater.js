var trap = height => {
    let totalVol = 0;
    let maxR = height[height.length - 1];
    let maxL = height[0];
    let lIdx = 0;
    let rIdx = height.length - 1;
    
    while(rIdx - lIdx > 0){
        if(maxR > maxL){
            lIdx++
            let currentHeight = height[lIdx];
            if(currentHeight < maxL){
                let volumeIncrease = maxL - currentHeight
                totalVol = totalVol + volumeIncrease
            } else {
                maxL = currentHeight;
            }
        } else {
            rIdx--
            let currentHeight = height[rIdx];
            if(currentHeight < maxR){
                let volumeIncrease = maxR - currentHeight;
                totalVol = totalVol + volumeIncrease;
            } else {
                maxR = currentHeight;
            }
        }
        console.log(lIdx, rIdx, totalVol, maxL, maxR, height[lIdx], height[rIdx])
    }
	
    return totalVol;
};


console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])) // -> 6
console.log(trap([4,2,0,3,2,5])) // -> 9
