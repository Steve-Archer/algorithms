// brute force

function bestSum(target, numbers){
    if(target === 0) return [];
    if(target < 0) return null;

let shortestCombo = null;

    for (let i of numbers){
        let difference = target - i;
        let remainder = bestSum(difference, numbers);
        if (remainder !== null){
            let combination = [ ...remainder, i];
            if(shortestCombo === null || combination.length < shortestCombo.length){
                shortestCombo = combination;
            }
        }
    }
    return shortestCombo;
}

console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(8, [2, 3, 5]));
console.log(bestSum(8, [1, 4, 5]));
/* console.log(bestSum(100, [1, 2, 5, 25])); */



// memoization

function bestSumMemo(target, numbers, memo = {}){
    if (target in memo) return memo[target];
    if(target === 0) return [];
    if(target < 0) return null;

let shortestCombo = null;

    for (let i of numbers){
        let difference = target - i;
        let remainder = bestSumMemo(difference, numbers, memo);
        if (remainder !== null){
            let combination = [ ...remainder, i];
            if(shortestCombo === null || combination.length < shortestCombo.length){
                shortestCombo = combination;
            }
        }
    }
    memo[target] = shortestCombo;
    return shortestCombo;
}

console.log(bestSumMemo(7, [5, 3, 4, 7]));
console.log(bestSumMemo(8, [2, 3, 5]));
console.log(bestSumMemo(8, [1, 4, 5]));
console.log(bestSumMemo(100, [1, 2, 5, 25]));