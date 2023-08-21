import fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').slice(1);
const result = input.map((x, i) => {
  const line = x.toString().split(' ');
  const [A, B] = line.map(x => parseInt(x));
  return `Case #${i + 1}: ${A} + ${B} = ${A + B}`;
});
console.log(result.join('\n'));
