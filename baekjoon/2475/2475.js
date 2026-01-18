const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = input[0].split(' ').map(Number);

console.log(arr.reduce((acc, curr) => acc + curr**2, 0) % 10);
