const fs = require('fs');
//const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

const length = input[0];

let extension_count = {}

for (i = 1; i <= length; i++) {
    const extension = input[i].replace('\r', '').split('.')[1];

    if (extension_count[extension]) {
        extension_count[extension] += 1;
    } else {
        extension_count[extension] = 1;
    }
}

Object.keys(extension_count).sort().map(el => {
    console.log(`${el} ${extension_count[el]}`)
    return el;
});