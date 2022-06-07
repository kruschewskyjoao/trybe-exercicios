
const imc = (peso, altura) => {
  
  console.log(`Seu peso é: ${peso}, sua altura é: ${altura}. Seu IMC = ${peso / ((altura/100) * (altura/100))}`)
  const test =  peso / ((altura /100) * (altura/100))
  if(test < 18.5) {
    return console.log("Abaixo do peso (magreza)")
  }
  
  if (test >= 18.5) {
    return console.log("Peso normal")
  }
  
  if(test >= 25) {
    return console.log("Acima do peso (sobrepeso)")
  }
  
  if(test >= 30) {
    return console.log("Obesidade grau 1")
  }
  
  if(test >= 35) {
    return console.log("Obesidade grau 2")
  }
  
  if(test >= 40) {
    return console.log("Obesidade grau 3 e 4")
  }
}

module.exports = { imc }