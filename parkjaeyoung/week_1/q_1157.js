const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
//const input = fs.readFileSync(__dirname + '/input.txt').toString().split('\r\n');

const upper_input = input[0].toUpperCase();

let duplicate_str_info = {}

for(const el of upper_input){
    // console.log(el);
    if(duplicate_str_info[el]){
        duplicate_str_info[el] += 1;
    }else {
        duplicate_str_info[el] = 1;
    }
}

const count_str = Object.values(duplicate_str_info);
const max = Math.max(...count_str); 

const max_count = count_str.filter(el => el === max).length;

if (max_count > 1 || max_count === 0) {
    console.log('?');
} else {
    const key_index = count_str.findIndex(el => el === max);
    const str_info_keys = Object.keys(duplicate_str_info);
    console.log(str_info_keys[key_index]);
}
