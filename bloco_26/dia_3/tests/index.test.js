const { handleNumber } = require('../index');
const { expect } = require('chai');

describe('Chama a função handleNumber', () => {
  describe('verifica se o numero passado como parâmetro', () => {
    it('é um número positivo', () => {
      const numero = handleNumber(5);

      expect(numero).to.be.equal('positivo');
    })

    it('é um número negativo', () => {
      const numero = handleNumber(-1);

      expect(numero).to.be.equal('negativo');
    })

    it('é um número neutro', () => {
      const numero = handleNumber(0)

      expect(numero).to.be.equal('neutro');
    })
  })

  describe('verifica se o número passado como parâmetro', () => {
    it('não é do tipo "Number"', () => {
      const numero = handleNumber('3')

      expect(numero).to.be.a('string')
    })
  })
});