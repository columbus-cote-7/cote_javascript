(function main() {
    let isLocal = true;
    let fs = require("fs");
    let filePath = isLocal ? "t.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");

    let N = Number(input[0])
    let answer = []
    for (let i = 1; i <= N; i++) {
        let leftStack = []
        let rightStack = []
        let arr = input[i].trim().split('')

        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === '<' && leftStack.length > 0) {
                rightStack.push(leftStack.pop())
            }
            else if (arr[j] === '>' && rightStack.length > 0) {
                leftStack.push(rightStack.pop())
            }
            else if (arr[j] === '-' && leftStack.length > 0) {
                leftStack.pop()
            }
            else if (arr[j] !== '-' && arr[j] !== '>' && arr[j] !== '<') {
                leftStack.push(arr[j])
            }

        }
        answer.push(leftStack.join('') + rightStack.reverse().join(''))

    }
    console.log(answer.join('\n'))
})();