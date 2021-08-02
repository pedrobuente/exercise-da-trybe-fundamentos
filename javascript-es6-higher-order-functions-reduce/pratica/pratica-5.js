const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
 return names.reduce((acc,palavra) => acc + palavra.split('').reduce((acumulador,current) => {
     if (current === 'a' || current === 'A') return acumulador + 1
     return acumulador;
 },0),0);
 
}

assert.deepStrictEqual(containsA(), 20);