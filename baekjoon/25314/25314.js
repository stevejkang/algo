const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const N = parseInt(input);

console.log('long '.repeat(N/4) + 'int');
