const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = input[1].split(' ').map(Number);
const f = parseInt(input[2]);

console.log(arr.filter(x => x === f).length);
