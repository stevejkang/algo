const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().toUpperCase();

let alphabetCount = {};

for (let alphabet of input) {
  alphabetCount[alphabet] = alphabetCount[alphabet] ? alphabetCount[alphabet]+1 : 1;
}

let maxCount = Math.max(...Object.values(alphabetCount));
let result = Object.keys(alphabetCount).filter(v => alphabetCount[v] === maxCount);

result.length > 1 ? console.log('?') : console.log(result[0]);
