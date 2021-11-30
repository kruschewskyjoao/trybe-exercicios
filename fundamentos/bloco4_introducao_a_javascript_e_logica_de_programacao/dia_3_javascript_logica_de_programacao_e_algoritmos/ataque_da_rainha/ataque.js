
//Horizontal é linha  =RowPosition
//Vertical é coluna
//posição da rainha
let queenRowPosition = 6
let queenColumnPosition = 4


//Posição do oponente
let opponentRowPosition = 2
let opponentColumnPosition = 4

//Armazena se o ataque foi bem sucedido
let canAttack = false

//Verifica se a peça está na mesma linha e coluna 
if(opponentRowPosition === queenRowPosition || 
opponentColumnPosition === queenColumnPosition) {
    canAttack = true
}

console.log('Pode atacar?', canAttack)