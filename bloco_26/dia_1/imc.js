const readline = require('readline-sync');

const peso = readline.questionFloat('Qual o seu peso? ')
const altura = readline.questionFloat('Qual a sua altura?(em metros) ')

function form() {
  return peso / (altura ** 2)
}

function situation() {
  if (form() < 18.5) {
    return "abaixo do peso (magreza)"
  } else if (form() >= 18.5 && form() <= 24.9) {
    return "peso normal"
  } else if (form() >= 25.0 && form() <= 29.9) {
    return "acima do peso (sobrepeso)"
  } else if (form() >= 30.0 && form() <= 34.9) {
    return "obesidade grau I"
  } else if (form() >= 35.0 && form() <= 39.9) {
    return "obesidade grau II"
  }
  return "obesidade graus III e IV"  
}

console.log(`Baseado nos seus dados, o seu imc é ${ form() }. Você se encontra na situação de ${ situation() }`);
