const fs = require('fs');
//const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

const length = input[0];

for (i = 1; i <= length; i++) {
    //console.log(input[i]);
    const test = (/^[A-F]?[A]+[F]+[C]+[A-F]?$/).test(input[i].replace('\r', ''));
    //console.log(test);
    console.log(test ? 'Infected!' : 'Good');
}