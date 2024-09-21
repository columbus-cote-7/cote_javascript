const fs = require('fs');
const [valuesNumber, expression, ...data] = fs.readFileSync('/dev/stdin').toString().split('\n');
//const [valuesNumber, expression, ...data] = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

const input = data.map(el => el.replace('\r', ''));

const stack = [];

const obj = {};
let start = 65; // A - ASCII => 65

for (let el of input) {
    obj[String.fromCharCode(start++)] = +el;
}

const createOperation = (operator) => {
    const y = stack.pop();
    const x = stack.pop();
    if (operator === "+") {
        stack.push(x + y);
    } else if (operator === "-") {
        stack.push(x - y);
    } else if (operator === "*") {
        stack.push(x * y);
    } else if (operator === "/") {
        stack.push(x / y);
    }
}

for (let str of expression) {
    if (str === "+" || str === "-" || str === "*" || str === "/") createOperation(str);
    else stack.push(obj[str]);
}

console.log(stack[0].toFixed(2));