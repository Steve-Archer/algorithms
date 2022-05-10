

function bianarySearch(input, target) {

    if (input[0] == target) {
        return true;
    }

    if (input[0] != undefined) {
        let half = target.length / 2;
        if (target == input[half]) {
            return true;
        }
        if(target < input[half]){
            input.slice(0, half);
            console.log(input);
            bianarySearch(input, target);
        }
        if(target > input[half]){
            input.slice(half, array.length);
            console.log(input);
            bianarySearch(input, target);
        }
    }
    return false;
}


input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

console.log(bianarySearch(input, 11));

