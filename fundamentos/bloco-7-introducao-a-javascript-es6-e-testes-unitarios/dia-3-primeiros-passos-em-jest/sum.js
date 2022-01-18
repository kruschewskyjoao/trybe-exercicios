const verificaNumero = (a, b) => {
  if(isNaN(a) || isNaN(b)) {
    throw new Error('Numero inválido')
  } else if(typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Numero inválido!!')
  }
}

const soma = (a, b) => {
  verificaNumero(a,b)
  try {
    return a + b
  } catch(error) {
    throw error.message
  }
}
module.exports = soma;