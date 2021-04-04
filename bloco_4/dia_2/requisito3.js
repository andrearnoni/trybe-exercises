let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let indexSoma = 0; indexSoma < numbers.length; indexSoma += 1) {
    soma += numbers[indexSoma];
}

console.log("A média é " + soma / numbers.length);
