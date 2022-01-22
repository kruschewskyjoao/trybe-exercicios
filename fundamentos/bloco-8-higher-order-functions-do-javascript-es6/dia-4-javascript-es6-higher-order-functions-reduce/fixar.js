const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

/* const even = numbers.filter((numberEven) => numberEven % 2 === 0)
console.log(even)

const resultado = even.reduce((acc, curr) => acc + curr)

console.log(resultado) */

//refatorando

const resultado = numbers.filter((even) => even % 2 === 0).reduce((acc, curr) => acc + curr);
console.log(resultado);