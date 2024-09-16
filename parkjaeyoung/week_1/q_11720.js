const fs = require('fs');
//const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

let length = Number(input[0]);
let strNum = input[1];


let i = 0;
let sum = 0;

while (i < strNum.length) {
    sum += Number(strNum[i]);
    i++;
}

console.log(sum);