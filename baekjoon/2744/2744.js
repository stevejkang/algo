const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const str = input[0];

console.log(str.split('').map(x => x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()).join(''));
