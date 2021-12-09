let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  },
}
let concat1 = 'A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.'
console.log(concat1)

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018]

let concat2 = 'A jogadora ' + player['name'] + ' ' + player['lastName'] + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes'
console.log(concat2)

let concat3 = 'A jogadora possui ' + player['medals']['golden'] + ' medalhas de ouro e ' + player.medals.silver + ' de prata.'
console.log(concat3)