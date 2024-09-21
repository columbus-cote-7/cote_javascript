const fs = require('fs');
//const readLines = fs.readFileSync('/dev/stdin').toString().split('\n');
const readLines = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

const input = readLines.map(el => el.replace('\r', ''));

const length = Number(input[0]);


const count_input = (string) => {
    const stack = [];

    for (index = 0; index < string.length; index++) {
        if (string[index] === '(') {
            stack.push('(');
        } else {
            if (stack.length > 0) {
                stack.pop();
            } else {
                console.log('NO');
                return;
                break;
            }
        }
    }

    if (stack.length > 0) {
        console.log('NO');
    } else {
        console.log('YES');
    }
}

for (i = 1; i <= length; i++) {
    count_input(input[i]);
}