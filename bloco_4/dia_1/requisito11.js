let salarioBruto = 3500;
let descontoINSS = salarioBruto * 0.11;
let salarioBase = salarioBruto - descontoINSS;
let descontoIR = salarioBase * 0.15 - 354.80;
let salarioLiquido = salarioBase - descontoIR;

console.log(salarioLiquido);