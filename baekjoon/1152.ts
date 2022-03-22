import fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
if (input.length === 0) console.log(0);
else console.log(input.split(' ').length);
