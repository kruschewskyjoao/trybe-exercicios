
//linha 6 e coluna 4            x = 6 e y= 4
//Horizontal é linha  =RowPosition
//Vertical é coluna
//posição da rainha
let queenRowPosition = 6
let queenColumnPosition = 4


//Posição do oponente
let opponentRowPosition = 2
let opponentColumnPosition = 8

//Armazena se o ataque foi bem sucedido
let canAttack = false

//Verifica se a peça está na mesma linha e coluna 
if(opponentRowPosition === queenRowPosition || 
opponentColumnPosition === queenColumnPosition) {
    canAttack = true
}

 //console.log('Pode atacar?', canAttack)


//Diagonal Superior Direita ( inicia 6,4 vai para final 8,6) x=8 y=6
for(let iSupDir = 1; iSupDir < 8; iSupDir++){
    let currentQueenRow = queenRowPosition + iSupDir        //A localização da rainha(atual) + a localização depois de um passo (um em um)
    let currentQueenColumn = queenColumnPosition + iSupDir

    //Se a linha for > 8 OU a coluna for > 8 eu tenho que parar o loop
    if(currentQueenRow > 8 || currentQueenColumn > 8) {
        break;
    }

    if(currentQueenRow === opponentRowPosition && currentQueenColumn === opponentColumnPosition){       //Se o oponente estiver no meio do caminho, ele para
        canAttack = true
        console.log('Pode atacar na diagonal superior direita')
        break
    }
}

//Diagonal Inferior Esquerda (inicia rainha na 6,4)
for(let iInfEsq = 0; iInfEsq < 8; iInfEsq++) {
    let currentQueenRow = queenRowPosition - iInfEsq
    let currentQueenColumn = queenColumnPosition - iInfEsq

    //Se a linha < 1 OU coluna < 1 (linha e coluna menor que 1 tem que parar o loop) 
    if(currentQueenRow < 1 || currentQueenColumn < 1) {
        break
    }

    //ataque
    if(currentQueenRow === opponentRowPosition && currentQueenColumn === opponentColumnPosition){       //Se o oponente estiver no meio do caminho, ele para
        canAttack = true
        console.log('Pode atacar na diagonal inferior esquerda')
        break
    }
}

//Diagonal Superior Esquerda  - A cada posição aumenta a linha e diminui a coluna
for(let iSupEsq = 1; iSupEsq < 8; iSupEsq++) {
    let currentQueenRow = queenRowPosition + iSupEsq
    let currentQueenColumn = queenColumnPosition - iSupEsq

    //Se a linha > 8 OU coluna < 1 tem que parar o loop
    if(queenRowPosition > 8 || queenColumnPosition < 1) {
        break
    }
    if(currentQueenRow === opponentRowPosition && currentQueenColumn === opponentColumnPosition) {
        canAttack = true
        console.log('Pode atacar na diagonal superior esquerda')
        console.log(canAttack)
    }
}

//Diagonal Inferior Direita    Diminui a linha e aumenta coluna
for(let iInfDir = 1; iInfDir < 8; iInfDir++){
    let currentQueenRow = queenRowPosition - iInfDir
    let currentQueenColumn = queenColumnPosition + iInfDir

    //Se a linha < 1 OU coluna > 8
    if(currentQueenRow < 1 || currentQueenColumn > 8) {
        break
    }

    if(currentQueenRow === opponentRowPosition && currentQueenColumn === opponentColumnPosition) {
        canAttack = true
        console.log('Pode atacar na diagonal inferior direita')
        console.log(canAttack)
    }
}