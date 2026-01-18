const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const N = parseInt(input);

const arr = [];

for (let i = N; i > 0; i--) {
  arr.push(' '.repeat(N-i).concat('*'.repeat(i)));
}

console.log(arr.join('\n'));
