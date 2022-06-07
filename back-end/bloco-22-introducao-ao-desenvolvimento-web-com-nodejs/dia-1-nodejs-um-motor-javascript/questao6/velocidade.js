const readLine = require('readline-sync');

function calculaVelocidadeM(dis,tem) {
  const VM = (dis/tem);
  return VM;
}

function main(){
  const dis = readLine.questionInt('Distancia em Metros ');
  const tem = readLine.questionInt('Tempo gasto em Segundos ');
  const velm = calculaVelocidadeM(dis,tem);
  console.log(`Velocidade média: ${velm}m/s`);
}
main(); 
