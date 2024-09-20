(function main() {
    let isLocal = true;
    let fs = require("fs");
    let filePath = isLocal ? "t.txt" : "/dev/stdin";
    let input = fs.readFileSync(filePath).toString().trim().split("\n");

    // let arr = input[0].trim().split('')
    // let cnt = Number(input[1])

    // let cursor = arr.length 
    // for (let i = 2; i < input.length; i++) {
    //     let a = input[i].split('')
    //     if (a[0] === 'P') {
    //         arr.splice(cursor, 0, a[2])
    //         cursor = cursor + 1
    //     }
    //     else if (a[0] === 'L') {
    //         cursor = cursor - 1
    //         if (cursor < 0) {
    //             cursor = 0
    //         }
    //     }
    //     else if (a[0] === 'D') {
    //         if (cursor > arr.length - 1) {
    //             cursor = arr.length - 1
    //         }
    //         cursor = cursor + 1

    //     }
    //     else {
    //         if (cursor === 0) {
    //             continue
    //         }
    //         arr.splice(cursor - 1, 1)
    //         cursor = cursor - 1
    //     }
    // }


    // console.log(arr.join(''));

    const leftStack = input.shift().split('');
    const N = input.shift();
    const rightStack = [];
    for (let i = 0; i < N; i++) {
        let tmp = input[i].toLowerCase().trim();
        switch (tmp) {
            case 'l':
                if (leftStack.length !== 0) {
                    rightStack.push(leftStack.pop());
                }
                break;
            case 'd':
                if (rightStack.length !== 0) {
                    leftStack.push(rightStack.pop());
                }
                break;
            case 'b':
                if (leftStack.length !== 0) {
                    leftStack.pop();
                }
                break;
            default:
                leftStack.push(tmp.split(' ')[1]);
                break;
        }
    }

    console.log((leftStack.concat(rightStack.reverse())).join(''))
})();