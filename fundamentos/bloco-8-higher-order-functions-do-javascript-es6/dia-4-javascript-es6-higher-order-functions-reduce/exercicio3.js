const {books} = require('./exercicio2')


function averageAge(arr) {
  const arrayAges =  arr.map((ageAll) => ageAll.releaseYear - ageAll.author.birthYear)
  const averageAge = arrayAges.reduce((idade,recebe) => idade + recebe) / arrayAges.length
  return averageAge
}

console.log(averageAge(books))
