import fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('-');
console.log(input
  .map(a => a.toString()[0])
  .join('')
);
