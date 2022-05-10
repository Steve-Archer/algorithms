var longestPalindrome = function(s) {
    let palindromes = [];
    if(s.length <= 1) {
        return s;
    }
    for (var i = 0; i < s.length; i += 1) {
      j = 0;
      k = 0;
      while(s[i + j] === s[i - j] && s[i + j] && s[i - j]) {
        j++;
      };
      palindromes.push(s.slice(i-(j-1), i+j))
      console.log(j, k, i, palindromes)
      j = 0;
      while(s[(i + 1) + k] === s[i - k] && s[(i + 1) + k] && s[i - k]){
        k++;
      }
      palindromes.push(s.slice(i-(k-1),(i+1)+k))
      console.log(j, k, i, palindromes)
      k = 0;
    }
    let returner = palindromes.sort((a, b) => {
        return b.length - a.length})[0];
    return returner
};
console.log(longestPalindrome("abbbabbc"))