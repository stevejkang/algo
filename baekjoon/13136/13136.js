const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const [R, C, N] = input;

console.log(Math.ceil(R / N) * Math.ceil(C / N));
