const fs = require('fs');
//const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync(__dirname + '/input.txt').toString().trim();

const variableName = input;

const checkCamelCase = (variableName) => {
    return !!variableName.match(/[A-Z]+/g);
}

const checkSnakeCase = (variableName) => {
    return variableName.includes('_');
}

const checkErrorCase = (variableName) => {
    const case1 = variableName.includes('__');
    const case2 = variableName.startsWith('_') || variableName.endsWith('_');
    const case3 = (/^[A-Z]/g).test(variableName);

    return case1 || case2 || case3;
}

const convertSnakeCaseFromCamelCase = (variableName) => {
    return variableName.replaceAll(/[A-Z]/g, letter => `_${letter.toLowerCase()}`)
}

const convertCamelCaseFromSnakeCase = (variableName) => {
    return variableName.replaceAll(/_[a-z]/g, letter => letter.split('_')[1].toUpperCase())
}

console.time('q1');
const isCamelCase = checkCamelCase(variableName);
const isSnakeCase = checkSnakeCase(variableName);
const isErrorCase = checkErrorCase(variableName);

if (isErrorCase) {
    console.log('isErrorCase');
    console.log('Error!');
} else if (isCamelCase === true && isSnakeCase === true) {
    console.log('isCamelCase === isSnakeCase');
    console.log('Error!');
} else {
    let variable = '';
    if (isCamelCase) {
        variable = convertSnakeCaseFromCamelCase(variableName);
    } else {
        variable = convertCamelCaseFromSnakeCase(variableName);
    }

    console.log(variable);
}
console.timeEnd('q1');

console.time('q2');
const javaRegex = /^[a-z][a-zA-Z]*$/;
const cppRegex = /^[a-z](?!.*__)[a-z_]*[^_A-Z]$/;

if (javaRegex.test(input)) {
    const cppStyle = input.replace(
        /[A-Z]/g,
        (match) => `_${match.toLowerCase()}`
    );

    console.log(cppStyle);
} else if (cppRegex.test(input)) {
    const javaStyle = input
        .split('_')
        .map((it, i) => (i === 0 ? it : it.charAt(0).toUpperCase() + it.slice(1)));

    console.log(javaStyle.join(''));
} else {
    console.log('Error!');
}
console.timeEnd('q2');