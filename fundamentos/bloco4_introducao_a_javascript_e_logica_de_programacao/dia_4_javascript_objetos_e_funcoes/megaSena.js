//1 Gerar um numero aleatório
function generateRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 60) + 1
    return randomNumber
}


//2. Gerar um jogo(Sortear os números)
function generateGame(){
    let megaSena = []
    //Preciso sortear os 6 numeros
    for(let i = 0; i < 6; i++){
        let randomNumber = generateRandomNumber()

        megaSena.push(randomNumber)
    }
    return megaSena
}


// 3. Conferir um jogo e comparar com o resultado da mega sena
// a. Eu preciso de um jogo
// b. Eu preciso do resultado da mega sena
// c. Eu preciso verificar os acertos
function checkMegaResult(game, result){
    //conferir o jogo
let numberOfHits = 0

for(let index = 0; index < result.length; index += 1) {
    let drawNumber = result[index]
    //console.log(drawNumber)
    
    for(let gameIndex = 0; gameIndex < game.length; gameIndex += 1) {
        let otaviocomparador = game[gameIndex]
        //console.log(otavioNumber)
        if(drawNumber === otaviocomparador){
            numberOfHits += 1
        }
    }
}
return numberOfHits 
}


let otavioGame = [4, 15, 20, 33, 55, 58]
//console.log("Jogo do Otavio:", otavioGame)


let megaSenaNumbers = generateGame()


console.log('Jogo do Otavio:', otavioGame)
console.log('Mega Sena', megaSenaNumbers)
console.log('Numeros acertados:', checkMegaResult(otavioGame, megaSenaNumbers))