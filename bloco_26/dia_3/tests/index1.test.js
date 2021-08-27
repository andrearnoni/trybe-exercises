const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');
const handleText = require('../index1');

describe('Chama a função handleText', () => {
  describe('a resposta', () => {
    before(() => {
      sinon.stub(fs, 'writeFileSync');
    })

    after(() => {
      fs.writeFileSync.restore();
    })

    it('é uma string', () => {
      const resposta = handleText('arquivo.txt', 'vai corinthians')

      expect(resposta).to.be.a('string');
    })

    it('é igual a ok', () => {
      const resposta = handleText('arquivo.txt', 'vai corinthians')

      expect(resposta).to.be.equal('ok');
    })
  })
})