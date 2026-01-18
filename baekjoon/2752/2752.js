const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

console.log(input.map(Number).sort((a, b) => a - b).join(' '));
