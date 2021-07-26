const assert = require('assert');
// escreva a função wordLengths aqui
function wordLengths(arr){
    const newArray = [];
    for(let index of arr){
        newArray.push(index.length);
    }
    return newArray;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);