const fs = require('fs');
//const input = fs.readFileSync('/dev/stdin').toString().replace('\r', '').replace('\n', '').split(' ');
const input = fs.readFileSync(__dirname + '/input.txt').toString().replace('\r', '').replace('\n', '').split(' ');

const getGcd = (input) => {

    input.sort();
    let r = 0;
    let a = input[1];
    let b = input[0]

    while (b != 0) {
        r = a % b;
        a = b;
        b = r;
    }

    return a;
}

const getLcm = (input, gcd) => {
    return (input[0] * input[1]) / gcd;
}

const gcd = getGcd(input);
console.log(gcd);
const lcm = getLcm(input, gcd);
console.log(lcm);

