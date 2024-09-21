const fs = require('fs');
//const [dataSetNumber, ...input] = fs.readFileSync('/dev/stdin').toString().split('\n');
const [dataSetNumber, ...input] = fs.readFileSync(__dirname + '/input.txt').toString().trim().split('\n');

const data = input.map(el => el.replace('\r', ''));
let dataSet = Array(Number(dataSetNumber)).fill({});


for (i = 0; i < data.length; i++) {
    const index = Math.floor(i / 2);
    if (i % 2 === 0) {
        const [docsNum, whatNumDocQueue] = data[i].split(' ')
        const obj = {
            docsNum,
            whatNumDocQueue: Number(whatNumDocQueue),
        }
        dataSet[index] = { ...dataSet[index], ...obj }
    } else {
        const dataArr = data[i].split(' ');
        dataSet[index].maxImportance = Math.max(...dataArr.map(el => Number(el)))
        dataSet[index].docsQueue = dataArr.map((el, i) => ({ docKey: i, importance: Number(el) }))
    }
}

for (docsInfo of dataSet) {
    const { docsNum, whatNumDocQueue, docsQueue, maxImportance } = docsInfo

    let queue = docsQueue;
    let max = maxImportance;
    let number = 0;
    let outDocKey = -1;

    while (true) {
        let outDoc = queue.shift();
        if (outDoc.importance === max) {
            max = Math.max(...queue.map(el => el.importance));
            number++;
            outDocKey = outDoc.docKey
            if (whatNumDocQueue === outDocKey) break;
        } else {
            queue.push(outDoc);
        }
    }

    console.log(number);
}