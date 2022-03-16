import fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const a = parseInt(input[0]);
console.log(a-543);
