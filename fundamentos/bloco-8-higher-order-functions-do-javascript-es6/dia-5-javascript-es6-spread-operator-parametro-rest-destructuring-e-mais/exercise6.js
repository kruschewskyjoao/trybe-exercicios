const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

const carProfile = (arr) => {
  const [nome, marca, ano] = arr
  return {
  name: nome,
  brand: marca,
  year: ano,
  }
};

console.log(carProfile(palio))
console.log(carProfile(shelbyCobra))
console.log(carProfile(chiron))



const person = {
  firstName: 'joao',
  lastName: 'a'
}

const getNationality = ({firstName, nationality = 'Brazilian'}) => `${firstName} ${nationality}`

console.log(getNationality(person))