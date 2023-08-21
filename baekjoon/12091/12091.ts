import fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const arr = ['Jolteon', 'Flareon', 'Vaporeon'];
console.log(arr[Number(input)%3]);
