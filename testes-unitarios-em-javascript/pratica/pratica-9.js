const assert = require('assert');
// escreva a função findTheNeedle aqui
function findTheNeedle(arr, palavra){
    let num ;
    let cont = 0;
    for (let index = 0; index < arr.length ; index += 1){
        if(palavra === arr[index]){
            num = index;
            cont += 1;
        }
    }
    if (cont === 0){
        num = -1;
    }
    return num;
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);