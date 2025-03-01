const fs = require('fs');
//const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');
console.time('q_10798');

const input_arr = input.map(el => {
    return el.replaceAll('\r', '').split('');
});

let ouput_arr = Array.from(Array(15), () => new Array(input_arr.length).fill(''));

for (i = 0; i < input_arr.length; i++){
    for (j = 0; j < input_arr[i].length; j++){
        ouput_arr[j][i] = input_arr[i][j] || '';
    }
}

let output = '';

for (i = 0; i < ouput_arr.length; i++){
    output += ouput_arr[i].join('');
}

console.timeEnd('q_10798');
console.log(output);