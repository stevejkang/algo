const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = parseInt(input[2]);

if (a === 60 && b === 60 && c === 60) {
  console.log('Equilateral');
} else if (a + b + c === 180) {
  if (a === b || b === c || c === a) {
    console.log('Isosceles');
  } else {
    console.log('Scalene');
  }
} else {
  console.log('Error');
}
