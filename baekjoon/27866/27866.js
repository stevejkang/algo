const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const S = input[0].toString();
const N = parseInt(input[1]);

console.log(S[N-1]);
