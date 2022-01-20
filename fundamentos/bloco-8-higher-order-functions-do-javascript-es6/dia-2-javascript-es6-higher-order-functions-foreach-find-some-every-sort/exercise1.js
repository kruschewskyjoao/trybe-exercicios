const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
//1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

/* function authorBornIn1947(array) {
  return array.find((item) => item.author.birthYear === 1947)
}
console.log(authorBornIn1947(books))

//2 - Retorne o nome do livro de menor nome.
function smallerName(array) {
  let nameBook;
  // escreva aqui o seu código
  array.forEach((item) => {
    if(!nameBook || item.name.length < nameBook.length) {
      nameBook = item.name
    }

  })
  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
} */
/* 
console.log(smallerName(books))
Declaramos a variável nameBook sem nenhum valor;
Aplica-se a condicional if utilizando operadores lógicos. O primeiro é o not (!) antes de nameBook . Fazemos isso, 
pois o fato de nameBook não guardar nenhum valor é retornado "undefined" por padrão,
 consequentemente o JavaScript interpreta ele como um valor "falsy", que se traduz como "false" propriamente. Desta maneira,
  ao utilizar o operador not (!) antes de nameBook, 
 estamos negando que ele seja falso, ou seja, convertendo-o para "true";
Utilizamos o operador or/ou (||) para compor a lógica de que se nameBook retornar "true" ou se o tamanho da string contida na chave name 
de cada objeto em books for menor que o tamanho de nameBook , nossa função irá guardar o nome desse livro em nameBook ;
Na primeira iteração, como nameBook é undefined, ou seja não guarda o nome de nenhum livro, o primeiro nome de 
livro será guardado em nameBook . A partir da segunda iteração, é feita a comparação e se o nome do livro for menor que o que está guardado em nameBook 
, este irá tomar seu lugar e assim por diante até a última iteração. */


function getNamedBook(array) {
  return array.find((teste) => teste.name.length === 26)
}

//console.log(getNamedBook(books))


function booksOrderedByReleaseYearDesc(array) {
  return array.sort((a,b) => b.releaseYear - a.releaseYear)
}

//console.log(booksOrderedByReleaseYearDesc(books))


function everyoneWasBornOnSecXX(array) {
  return array.every((secXX) =>  secXX.author.birthYear > 1901 && secXX.author.birthYear <= 2000)  
}
console.log(everyoneWasBornOnSecXX(books))