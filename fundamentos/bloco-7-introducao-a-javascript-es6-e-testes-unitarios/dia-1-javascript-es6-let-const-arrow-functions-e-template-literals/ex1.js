const teste = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
    console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
  } else {
    let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
    console.log(elseScope);
  }
}

teste(true)


const oddsAndEvens = [13, 3, 4, 10, 7, 2];
//oddsAndEvens.sort(function(a,b){
//  return a - b
//})
// Seu código aqui.

console.log(oddsAndEvens.sort(function(a,b){
  return a-b
})); // será necessário alterar essa linha 😉




//normal
//const factorial = number => {
//  let result = 1
//  for(let i = 1; i <= number; i++) {
//    result *= i
//  }
//  return result
//}
//onsole.log(factorial(5))
//recursiva
const factorial = (number) => number > 1 ? number * factorial(number-1) : 1
console.log(factorial(6))

//q2
//function teste2() {
//  let maior = 'Antônio foi no banheiro e não sabemos o que aconteceu'
//  let arMaior = maior.split(' ')
//  let palavra = ''
//  for(let i = 0; i < arMaior.length; i++) {
//    if(palavra.length < arMaior[i].length) {
//      palavra = arMaior[i]
//    }
//  }
 // return console.log(palavra)
//}
//teste2()

const teste2 = (param) => {
//  let maior = param
  let arMaior = param.split(' ')
  let palavra = ''
  for(let i = 0; i < arMaior.length; i++) {
    if(palavra.length < arMaior[i].length) {
      palavra = arMaior[i]
    }
  }
  return console.log(palavra)
}

teste2('insira sua frase aqui')

//const pickBtn = document.querySelector('.botao')
const pick2h2 = document.querySelector('.res')
let contador = 0
//pickBtn.addEventListener('click', () => {
//  contador += 1
//  pickh2.innerHTML = contador
//  
//})

document.querySelector('.botao').addEventListener('click', () => pick2h2.innerHTML = contador +=1)
