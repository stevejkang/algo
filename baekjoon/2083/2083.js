const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = input.slice(0, -1).map(a => {
    const [name, age, weight] = a.split(' ');

    if (age > 17 || weight >= 80) {
        return `${name} Senior`;
    }

    return `${name} Junior`;
})

console.log(arr.join('\n'));
