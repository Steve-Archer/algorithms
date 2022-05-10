function can_sum(target, numbers, memo = {}){
    if(target in memo){
        return memo[target];
    }
    if(target === 0){
        return true;
    }
    if(target < 0){
        return false;
    }
    for(let i of numbers){
        difference = target - i;
        if(can_sum(difference, numbers, memo)===true){
            memo[target]= true;
            return true;
        }
    }
    memo[target] = false;
    return false;
}

console.log(can_sum(25, [4, 5, 6, 7]));
console.log(can_sum(17, [4, 5, 6, 7]));
console.log(can_sum(17, [14, 15, 16, 7]));
console.log(can_sum(11010, [10, 7]));


function how_sum(target, numbers, memo = {}){
    if (target in memo){
        return memo[target];
    }
    if (target === 0){
        return [];
    }
    if (target < 0) {
        return null;
    }
    for(let i of numbers){
        let difference = target - i;
        let result = how_sum(difference, numbers, memo);
        if (result !== null){
            memo[target] = [ ...result, i];
            return memo[target];
        }
    }
    memo[target] = null;
    return null;
}

console.log(how_sum(25, [4, 5, 6, 7]));
console.log(how_sum(17, [4, 5, 6, 7]));
console.log(how_sum(17, [14, 15, 16, 7]));
console.log(how_sum(300, [14, 7]));
