const somando = require('./sum')

describe('Verifica 3 questões', () => {
  it('Verifica soma de 4 e 5 é 9', () => {
    expect(somando(4, 5)).toBe(9)
  })
  it('Verifica se o retorno de 0+0 é 0', () => {
    expect(somando(0, 0)).toBe(0)
  })
  it('Verifica se numero não é string', () => {
    expect(somando(4, '5')).toEqual()
  })
})