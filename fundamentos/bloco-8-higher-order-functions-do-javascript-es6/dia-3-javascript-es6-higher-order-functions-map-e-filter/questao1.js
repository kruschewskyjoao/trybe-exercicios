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
//1
function formatedBookNames(arr) {
  const expectedRes =  arr.map((livro) => `${livro.name} - ${livro.genre} - ${livro.author.name}`)
  return expectedRes
}
//console.log(formatedBookNames(books))

//2
function nameAndAge(arr) {
  const ordem = arr.sort((a,b) => (a.releaseYear - b.releaseYear) - (a.author.birthYear - b.author.birthYear))
  let expectedRes = ordem.map((autor) => (
    {age: `${autor.releaseYear - autor.author.birthYear}`,author: `${autor.author.name}`}
    ))
  return expectedRes
}
//console.log(nameAndAge(books))

//3
function fantasyOrScienceFiction(arr) {
  const fantasyFic = arr.filter((fic) => fic.genre === 'Fantasia' || fic.genre === 'Ficção Científica')
  return fantasyFic
}
//console.log(fantasyOrScienceFiction(books))

function oldBooksOrdered(arr) {
  const moreThan60Ordered = arr.filter((more) => (2022 -more.releaseYear) > 60)
  moreThan60Ordered.sort((a,b) => a.releaseYear - b.releaseYear)
  return moreThan60Ordered
}
//console.log(oldBooksOrdered(books))

function fantasyOrScienceFictionAuthors(arr) {
  const ficFant = arr.filter((fic) => fic.genre === 'Fantasia' || fic.genre === 'Ficção Científica')
  const namesOrdered = ficFant.map((autor) => `${autor.author.name}`)
  namesOrdered.sort()
  return namesOrdered
}
//console.log(fantasyOrScienceFictionAuthors(books))

function oldBooks(arr) {
  const more60 = arr.filter((book) => (2022 - book.releaseYear) > 60)
  const resp = more60.map((nameBook) => `${nameBook.name}`)
  return resp
}
//console.log(oldBooks(books))

function authorWith3DotsOnName(arr) {
  const trDots = arr.filter((authorName) => authorName.author.name[1] === '.' && authorName.author.name[4] === '.' && authorName.author.name[7] === '.')[0].name
  return trDots
}
console.log(authorWith3DotsOnName(books))
