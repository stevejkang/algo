const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);

const arr = input.slice(1).map((a, i) => `${i + 1}. ${a}`);

console.log(arr.join('\n'));
