const fs = require('fs');
const [intiString, num, ...commands] = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');


let current = intiString.trim().length;
let string = intiString.trim();

// console.log(`initCurrnt: ${current} | string: ${string}`)
const execCommand = (command) => {
    if (command === 'L') {
        // console.log(`L case | current:${current} | string: ${string}`)
        if (current > 0) {
            current = current - 1;
        }
    } else if (command === 'D') {
        // console.log(`D case | current:${current} | string: ${string}`)
        if (current <= intiString.length) {
            current = current + 1;
        }
    } else if (command === 'B') {
        // console.log(`B case | current:${current} | string: ${string}`)
        if (current > 0) {
            let strArray = string.split('')

            strArray.splice(current - 1, 1);

            if (current === string.length) {
                current = current - 1;
            } else if (current === 1 && string.length === 2) {
                current = current - 1;
            }

            string = strArray.join('')

        }
    } else if (command.startsWith('P')) {
        // console.log(`P case | current:${current} | string: ${string}`)

        const [, insertChar] = command.split(' ');

        let strArray = string.split('')

        strArray.splice(current, 0, insertChar);

        string = strArray.join('')
    }
}

for (command of commands) {
    execCommand(command.trim());
    // console.log(string);
}

console.log(string)