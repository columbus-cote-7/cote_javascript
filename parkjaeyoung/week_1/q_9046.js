const fs = require('fs');
//const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const input = fs.readFileSync(__dirname + '/input.txt').toString().split('\n');

const test_case = input[0];

for (i = 1; i <= test_case; i++){

    let str_info = {};

    for(j = 0; j < input[i].length; j++){
        if (input[i][j] === ' ' || input[i][j] === '\r') {
            continue;
        }

        if (str_info[input[i][j]]){
            str_info[input[i][j]] += 1;
        }else{
            str_info[input[i][j]] = 1;
        }
    }

    const count_arr = Object.values(str_info);
    const max = Math.max(...count_arr);

    const count_by_max = count_arr.filter(el => el === max);
    if (count_by_max.length > 1 || count_by_max.length === 0) {
        console.log('?');
    } else {
        const key_index = count_arr.findIndex(el => el === max);
        const str_info_keys = Object.keys(str_info);
        console.log(str_info_keys[key_index]);
    }
}

