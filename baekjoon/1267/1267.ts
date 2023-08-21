import fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const callTimes = input[1].split(' ').map(x => parseInt(x));
const Y = callTimes.map(callTime => (Math.floor(callTime / 30) + 1) * 10);
const M = callTimes.map(callTime => (Math.floor(callTime / 60) + 1) * 15);
if (Y.reduce((a, b) => a + b) > M.reduce((a, b) => a + b)) {
  console.log(`M ${M.reduce((a, b) => a + b)}`);
} else if (Y.reduce((a, b) => a + b) < M.reduce((a, b) => a + b)) {
  console.log(`Y ${Y.reduce((a, b) => a + b)}`);
} else {
  console.log(`Y M ${Y.reduce((a, b) => a + b)}`);
}
