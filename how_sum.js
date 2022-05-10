// brute force

function howSum(target, numbers){
    if(target === 0) return [];
    if(target < 0) return null;

    for (let i of numbers){
        let difference = target - i;
        let result = howSum(difference, numbers);
        if (result !== null){ 
            return [ ...result, i];
        }
    }
    return null;
}

console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(7, [2, 6]));
console.log(howSum(7, [3, 4]));
console.log(howSum(7, [5, 2]));
console.log(howSum(300, [7, 14]));


// memoization

function howSumMemo(target, numbers){
    if(target === 0) return [];
    if(target < 0) return null;

    for (let i of numbers){
        let difference = target - i;
        let result = howSumMemo(difference, numbers);
        if (result !== null){ 
            return [ ...result, i];
        }
    }
}

console.log(howSumMemo(7, [5, 3, 4, 7]));
console.log(howSumMemo(7, [2, 6]));
console.log(howSumMemo(7, [3, 4]));
console.log(howSumMemo(7, [5, 2]));
console.log(howSumMemo(300, [7, 14]));