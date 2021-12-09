let person = {
  name: 'Joana',
  lastName: 'Silva',
  age: 30,
  canDrive: true,
  favoriteMovies: ['Star Wars', 'Batman'],
  adress: {
    street: 'Rua XYZ',
    number: 123,
    city: 'São Paulo'
  }
}
//console.log(person)

//Notação por ponto(dot notation)
//console.log(person.age)
//console.log(person.adress)

//Notação por colchetes
//console.log(person['age'])

//person['favoriteFood'] = 'Pizza'  //person.favoriteFood = 'pizza' também funciona
//console.log(person)

// console.log(person.adress.city)
// console.log(person.adress['street'])
// console.log(person['adress']['number'])

// delete person.lastName  // Omite a propriedade
// console.log(person)


//for normal
// let myArray = [6, 5, 4, 3, 2, 1]
// for(let i = 0; i < 6; i++) {
//   console.log('Com for convencional: ' + myArray[i])
// }

// for/of   -- Problemas mais simples.
// for(let arr of myArray) {
//   console.log('Com for/of ' + arr)
// }

//for/in   - Ele pega o indice
// for(let arr in myArray) {
//   console.log('Com for/in ' + arr)
//   console.log(myArray[arr]) //pega o valor no indice
// }

for(let i in person) {
  console.log(person[i])
}