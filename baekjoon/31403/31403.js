const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const a = input.map(Number);
const b = input.map(String);

console.log(`${a[0] + a[1] - a[2]}\n${Number(b[0] + b[1]) - Number(b[2])}`);
