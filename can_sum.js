// brute force

function canSum(target, numbers){
    if (target === 0) return true;
    if (target < 0) return false;
    for (let i of numbers){
        let difference = target - i;
        if (canSum(difference, numbers) === true){
            return true;
        }
    }
    return false;
}
console.log(canSum(7, [2, 3]));
console.log(canSum(7, [2, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(7, [2, 3, 5]));
console.log(canSum(300, [7, 14]));

// memoization

function canSumMemo(target, numbers, memo = {}){
    if(target in memo) return memo[target];
    if (target === 0) return true;
    if (target < 0) return false;
    for (let i of numbers){
        let difference = target - i;
        if (canSumMemo(difference, numbers, memo) === true){
            memo[target] = true;
            return true;
        }
    }
    memo[target] = false;
    return false;
}
console.log(canSumMemo(7, [2, 3]));
console.log(canSumMemo(7, [2, 3, 4, 7]));
console.log(canSumMemo(7, [2, 4]));
console.log(canSumMemo(7, [2, 3, 5]));
console.log(canSumMemo(300, [7, 14]));