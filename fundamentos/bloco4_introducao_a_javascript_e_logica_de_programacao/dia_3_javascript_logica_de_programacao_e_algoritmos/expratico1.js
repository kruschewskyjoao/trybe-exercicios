let n = 5
let symbol = '*'
let inputLine = ''

for(let i = 0; i < n; i++){
    inputLine += symbol
    // console.log(inputLine)   vai estar arvorezinha crescente
}
for(let i = 0; i < n; i++) {
    console.log(inputLine)
}

console.log('')

let exDois = 5
let linha = ''
for(let i = 0; i < exDois; i++) {
    linha += '*'
    console.log(linha)
}

console.log('')
// let inicial = 0
// let exTres = 5
// let ast = '*'
// let linhaVazia = ''
// let lugar = n
// for(let i = 0; i < exTres; i++) {
//     linhaVazia += ast
//     console.log(linhaVazia)
// }
// for(let z = exTres; z > inicial; z--) {
//     console.log(linhaVazia)
// }


let array = ['Java', 'JavaScript', 'Python', 'Html', 'CSS']
let maior = array[0]

for(let i = 0; i < array.length; i++) {
    if(array[i].length > maior.length) {
        maior = array[i]
    }
}
console.log(maior)

console.log('')


let fator = 10
let fatorial = 1
for(let i = 1; i < fator; i++) {
    fatorial *= i
}
console.log(fatorial)

console.log('')

//inverter palavra 
let palavra = 'Tryber'
let invertida = ''

for(let i = palavra.length -1; i >= 0; i--) {
    invertida += palavra[i]
}
console.log(invertida)