import fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const a = parseInt(input[0]);
const b = parseInt(input[1]);
console.log(a+b);
