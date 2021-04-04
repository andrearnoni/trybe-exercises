let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddNumbers = 0;

for (let indexNumbers = 0; indexNumbers < numbers.length; indexNumbers += 1) {
    if (numbers[indexNumbers] % 2 !== 0) {
        oddNumbers += 1  
    } 
}

if (oddNumbers === 0) {
    console.log("Nenhum número ímpar foi encontrado");
} else {
    console.log(oddNumbers);
}