//Exercicio funções
//Verificar se são palíndromo
function verificaPalindrome(frase) {
  var normal = frase
  let invertida = ''

  for(let i = frase.length -1; i >= 0; i--) {
      invertida += frase[i]
  }
  if(normal === invertida) {
    return true
  } else {
    return false 
  }
}
console.log(verificaPalindrome('pão'))

//2

let arr = [2, 3, 6, 7, 10, 1]
function maiorValor(arr) {
  let resultado = 0
  for(let i of arr) {
    
  }
}
console.log(maiorValor(arr))