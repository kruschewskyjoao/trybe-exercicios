/*
08 - Descubra a idade mínima
Escreva um algoritmo que recebe a idade de Marina, Silvia e Iza e retorne a mensagem informando a pessoa mais jovem no seguinte formato:
---------------------------------------------------
"x é a pessoa mais jovem e possui y anos de idade."
---------------------------------------------------
*/

    let marina = 21
    let silvia = 10
    let iza = 32

    if(marina < silvia && marina < iza) {
        console.log("Marina é a mais jovem")
    } else if (silvia < marina && silvia < iza) {
        console.log("Silvia é a mais jovem")
    } else {
        console.log("Iza é a mais jovem")
    }