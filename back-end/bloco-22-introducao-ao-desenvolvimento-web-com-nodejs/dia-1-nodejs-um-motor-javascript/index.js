const imcP = require('./imc');
const readLine = require('readline-sync');

const peso = readLine.questionFloat("Qual seu peso em KG?  ");
const altura = readLine.questionFloat("Qual sua altura em CM?  ");

imcP.imc(peso, altura);