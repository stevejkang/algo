const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const sort = input.sort((a, b) => a - b);

console.log(sort[1]);
