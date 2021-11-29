let otavioGame = [4, 15, 20, 33, 55, 58]
//console.log("Jogo do Otavio:", otavioGame)

// let number1 = 20
// let number2 = 17
// let number3 = 33
// let number4 = 30
// let number5 = 49
// let number6 = 19


let number1 = Math.floor(Math.random() * 60) + 1
let number2 = Math.floor(Math.random() * 60) + 1
let number3 = Math.floor(Math.random() * 60) + 1
let number4 = Math.floor(Math.random() * 60) + 1
let number5 = Math.floor(Math.random() * 60) + 1
let number6 = Math.floor(Math.random() * 60) + 1


let megaSenaNumbers = [number1, number2, number3, number4, number5, number6]
//console.log("Jogo sorteado:", megaSenaNumbers)


//conferir o jogo
let numberOfHits = 0

for(let index = 0; index < megaSenaNumbers.length; index += 1) {
    let drawNumber = megaSenaNumbers[index]
    //console.log(drawNumber)
    
    for(let gameIndex = 0; gameIndex < otavioGame.length; gameIndex += 1) {
        let otavioNumber = otavioGame[gameIndex]
        //console.log(otavioNumber)
        if(drawNumber === otavioNumber){
            numberOfHits += 1
        }
    }
}

console.log('Jogo do Otavio:', otavioGame)
console.log('Mega Sena', megaSenaNumbers)
console.log('Numeros acertados:', numberOfHits)