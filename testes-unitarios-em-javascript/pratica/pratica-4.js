const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

assert.strictEqual(myFizzBuzz(15),'fizzbuzz', 'resposta não esperada');
assert.strictEqual(myFizzBuzz(9),'fizz', 'resposta não esperada');
assert.strictEqual(myFizzBuzz(20),'buzz', 'resposta não esperada');
assert.strictEqual(myFizzBuzz(17), 17 , 'resposta não esperada');
assert.strictEqual(myFizzBuzz('17'), false , 'resposta não esperada');