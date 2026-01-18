const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const N = Number(input);

console.log(Array.from({ length: N }, (_, i) => `Hello World, Judge ${i + 1}!`).join('\n'));
