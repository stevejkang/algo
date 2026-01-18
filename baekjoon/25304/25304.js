const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const X = parseInt(input[0]);
const N = parseInt(input[1]);

const sum = input.slice(2).map((a) => Number(a.split(' ')[0]) * Number(a.split(' ')[1])).reduce((acc, curr) => acc + curr, 0);

console.log(X === sum ? 'Yes' : 'No');
