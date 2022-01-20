const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

function getNamedBook(array) {
  return array.find((twentSix) => twentSix.length === 26)
}

console.log(getNamedBook(expectedResult))
/* console.log(expectedResult.author.name.length)
console.log(expectedResult.author.length)
console.log(Object.values(expectedResult)) */