//Crie uma função que, dado um array de números inteiros,
// retorne a quantidade de números pares e impares
// ex formato: {pares: 0, ímpares: 0}

let array = [2, 8, 10, 23]

function paresEImpares(array) {
  let verifica = {
    pares: 0,
    impares: 0
  }

  for(let i of array) {
    if(i % 2 === 0) {
      verifica.pares += 1
    } else {
      verifica.impares += 1
    }
  }
  return verifica
}

console.log(paresEImpares(array))