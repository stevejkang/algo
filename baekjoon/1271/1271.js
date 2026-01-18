const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const [a, b] = input.split(' ').map(BigInt);

console.log(`${a / b}\n${a % b}`);
