let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])
// }

let resultado = 0
for(let res of numbers) {
    resultado += res
} 
console.log(resultado)

let media = 0
for(let calc of numbers) {
    media += calc / numbers.length
}
console.log(media)

if(media > 20) {
    console.log('Valor maior que 20')
} else {
    console.log('Valor menor ou igual a 20')
}

let maiorNumero = 0
for (let x = 0; x < numbers.length; x ++) {
    if(numbers[x] > maiorNumero) {
        maiorNumero = numbers[x]
    }
}
console.log(maiorNumero)

for(let y of numbers) {
    if(y % 2 !== 0) {
        console.log(y, 'é impar')
    }
}

// let menorNumero = 0
// for(let z = 0; z < numbers.length; z--) {
//     if(numbers[z] < menorNumero) {
//         menorNumero = numbers[z]
//     }
// }
// console.log(menorNumero)

let arrayNovo = []
for(let zi = 1; zi <= 25; zi++) {
    arrayNovo += zi
}
console.log(arrayNovo)