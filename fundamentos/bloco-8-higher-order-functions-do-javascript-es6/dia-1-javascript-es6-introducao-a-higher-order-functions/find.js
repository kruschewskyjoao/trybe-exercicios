const numbers = [19, 21, 30, 3, 45, 22, 15]
const findDivisbleBy3And5 = (number) => number % 3 === 0 || number % 5 === 0

const verifica = numbers.find(findDivisbleBy3And5)
console.log(verifica)
console.log(numbers.find(findDivisbleBy3And5));


//2
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (nomeCinco) => nomeCinco.length === 5
const nome = names.find(findNameWithFiveLetters)
console.log(nome)
console.log(names.find(findNameWithFiveLetters));



//3
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  return musicas.find((musica) =>  musica.id === id);
}

console.log(findMusic('31031685'))