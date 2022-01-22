const {books} = require('./exercicio2')

function longestNamedBook(arr) {
  const biggest = arr.filter((bigName) => bigName.name.length < 10)
  return biggest
}

console.log(longestNamedBook(books))