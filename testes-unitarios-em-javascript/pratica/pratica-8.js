const assert = require('assert');
// escreva a função sumAllNumbers aqui
function sumAllNumbers(arr){
    let soma = 0;
    for(let index of arr){
        soma = soma + index;
    }
    return soma;
};

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);