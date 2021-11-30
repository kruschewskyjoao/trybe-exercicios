// const numeros = [2, 5, 7, 1, 3, 9, 10, 100, 25, 20, 12]

// for(let i = 0; i < numeros.length; i++) {
//     console.log(numeros[i])
// }


// const tabuada = 9
// for (let i = 1; i <= 10; i++) {
//     console.log(tabuada * i)
// }

// Bubblesort 
const valores = [4, 6, 1, 2, 8, 1, 23, 0, -6]

for (let i = 1; i < valores.length; i++) {
    console.log('Valor do index primeiro ' + valores[i])
    for(let secondIndex = 0; secondIndex < i; secondIndex ++){
        console.log('Valor do segundo index ' + valores[secondIndex])
        if(valores[secondIndex] > valores[i]){
            let auxiliar = valores[i]
            valores[i] = valores[secondIndex]
            valores[secondIndex] = auxiliar
        }
    }
}

console.log(valores)