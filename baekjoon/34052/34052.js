const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const sum = input.map(Number).reduce((acc, curr) => acc + curr, 0);

console.log(sum + 300 <= 1800 ? 'Yes' : 'No');
