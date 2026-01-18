const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = input.map(x => x.split(' ').map(Number));

for (let i = 0; i < arr.length - 1; i++) {
  console.log(arr[i][0] + arr[i][1]);
}