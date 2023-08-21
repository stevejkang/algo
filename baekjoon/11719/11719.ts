import fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
console.log(input.join('\n'));
