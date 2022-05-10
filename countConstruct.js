function countConstuct(target, wordBank){
    if (target === '') return 1;

    let totalCount = 0;

    for (let i of wordBank){
        if(target.indexOf(i) === 0){
            let numberCombo = countConstuct(target.slice(i.length), wordBank);
            totalCount += numberCombo;
        }
    }
    return totalCount;
}

console.log(countConstuct('purple',['purp', 'p', 'le', 'purpl', 'ur']));
console.log(countConstuct('abcdef',['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(countConstuct('skateboard',['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(countConstuct('enterapotentpot',['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));



function countConstuctMemo(target, wordBank, memo = {}){
    if (target in memo) return memo[target];
    if (target === '') return 1;

    let totalCount = 0;

    for (let i of wordBank){
        if(target.indexOf(i) === 0){
            let numberCombo = countConstuctMemo(target.slice(i.length), wordBank, memo);
            totalCount += numberCombo;
        }
    }
    memo[target] = totalCount
    return totalCount;
}

console.log(countConstuctMemo('purple',['purp', 'p', 'le', 'purpl', 'ur']));
console.log(countConstuctMemo('abcdef',['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(countConstuctMemo('skateboard',['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(countConstuctMemo('enterapotentpot',['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));