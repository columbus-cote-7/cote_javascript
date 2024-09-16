const fs = require('fs');
//const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync(__dirname + '/input.txt').toString();

const sentence = input;

const re = sentence.replace(/<[a-z\s]+>|[a-z0-9]+/g, (word) => {
    return word.startsWith("<") ? word : word.split("").reverse().join("");
});

console.log(re);