const { expect } = require('chai');

const firstQuestion = require('./1questao')

describe('O numero é positivo, negativo ou neutro?', () => {
  it('Numero neutro', () => {
    expect(firstQuestion(0)).to.be.equals('neutro')
  })

  it('Numero positivo', () => {
    expect(firstQuestion(8)).to.be.equals('positivo')
  })

  it('Numero neutro', () => {
    expect(firstQuestion(-8)).to.be.equals('negativo')
  })
})