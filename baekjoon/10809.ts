import fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim() as String;
console.log(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'].map(c => input.indexOf(c)).join(' '));
