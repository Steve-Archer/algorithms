function canConstruct(target, wordBank){
    if (target === ''){
        return true;
    }
    for (let i of wordBank){
        if(target.indexOf(i) === 0){
            let suffix = target.slice(i.length);
            if (canConstruct(suffix, wordBank) === true) {
                return true;
            }
        }
    }
    return false;
}

console.log(canConstruct("abcdef", ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(canConstruct("skateboard", ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(canConstruct("enterapotentpot", ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
/* console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ['e', 'ee', 'eee', 'eeee', 'eeeee'])); */






function canConstructMemo(target, wordBank, memo = {}){
    if (target in memo) return memo[target];
    if (target === ''){
        return true;
    }
    for (let i of wordBank){
        if(target.indexOf(i) === 0){
            let suffix = target.slice(i.length);
            if (canConstructMemo(suffix, wordBank, memo) === true) {
                memo[target] = true;
                return true;
            }
        }
    }
    memo[target] = false;
    return false;
}

console.log(canConstructMemo("abcdef", ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(canConstructMemo("skateboard", ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(canConstructMemo("enterapotentpot", ['a', 'p', 'ent', 'enter', 'ot', 'o', 't']));
console.log(canConstructMemo("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ['e', 'ee', 'eee', 'eeee', 'eeeee']));