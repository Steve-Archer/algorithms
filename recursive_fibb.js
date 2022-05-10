function fib(n, memo = {}){
    if(n in memo) return memo[n];
    if(n<=2) return 1;
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}
for(i=1;i<=10;i++){
    console.log(i + " - " + fib(i));
}
