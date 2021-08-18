const sum = require('./pratica-1.js');

describe('a função soma verifica', () => {
    test('soma dos valores', () => {
        expect(sum(1,2)).toEqual(3)
    })
});

