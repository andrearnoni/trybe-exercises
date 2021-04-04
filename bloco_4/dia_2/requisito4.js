let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let indexNumbers = 0; indexNumbers < numbers.length; indexNumbers += 1) {
    soma += numbers[indexNumbers];
}

if (soma / numbers.length > 20){
        console.log("O valor da média é maior que 20")
    } else {
        console.log("O valor da média é menor que 20")
}

