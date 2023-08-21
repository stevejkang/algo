import fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const X = parseInt(input[0].toString().split(' ')[1]);
const A = input[1].toString().split(' ');
console.log(A
  .map(a => parseInt(a))
  .filter(a => a < X)
  .join(' ')
);
