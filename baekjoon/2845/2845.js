const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [L, P] = input[0].split(' ').map(Number);

const arr = input[1].split(' ').map(Number);

console.log(arr.map(a => a - L * P).join(' '));
