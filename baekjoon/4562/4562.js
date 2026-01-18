const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const a = input.slice(1).map(a => {
    const [x, y] = a.split(' ').map(Number);

    return x >= y ? 'MMM BRAINS' : 'NO BRAINS';
});

console.log(a.join('\n'));
