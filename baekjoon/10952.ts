import fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const result = input.map(line => line.toString().split(' ').map(x => parseInt(x)).reduce((a, b) => a + b)).filter(x => x !== 0);
console.log(result.join('\n'));
