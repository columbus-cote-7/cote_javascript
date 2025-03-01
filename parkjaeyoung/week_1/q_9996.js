const fs = require('fs');
//const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

// const length = input[0];
// const pattern = input[1].split('*');
// const patternLength = pattern[0].length + pattern[1].length;

// for(i = 0 ; i < length ; i++){
//     const sentence = input[i + 2];
//     if(sentence.length < patternLength){
//         console.log("NE");
//     }else{
//         if(sentence.startsWith(pattern[0]) && sentence.endsWith(pattern[1])){
//             console.log("DA");
//         }else{
//             console.log("NE");
//         }
//     }
// }


//백준에서 아래가 틀렸다는데 뭐가 틀린지 모르겠다..
const length = input[0];
const pattern = input[1];
const preg_pattern = `^${pattern.replace('*', '([a-z]|\\s)+')}$`;
const preg = RegExp(preg_pattern);


for(i = 0 ; i < length ; i++){
    const sentence = input[i + 2];
    if(sentence.length < pattern.length - 1){
        console.log("NE");
    }else{
        console.log(preg.test(sentence) ? 'DA' : 'NE');
    }
}
