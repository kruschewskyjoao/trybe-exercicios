//Funções   function nomeDaFunção(parametros) {bloco}
// function greet() {
//   console.log('Olá')
// }
// greet()

// function greet2(name) {
//   console.log('Olá ' + name)
// }
// greet2('João')
// greet2('Rods')
// greet2('Lucas')

function greet3(name, age) {
  console.log('Olá ' + name + '. Você tem ' + age + ' anos.')
}
greet3('João', 26)
greet3('Rods', 29)

function greet4(name, age) {
  return 'Olá ' + name + '. Você tem ' + age + ' anos.'
}
greet4('João', 22)  //Não retorna no console
console.log(greet4('Fernando', 41))


function canDrive(age) {
  if(age >= 18) {
    return true
  } else {
    return false
  }
}

console.log(canDrive(20))