let n = 5;
let character = "*";
let lineCharacter = "";

for (let indexN = 0; indexN < n; indexN += 1) {
    lineCharacter = lineCharacter + character;
}

for (let indexN = 0; indexN < n; indexN += 1) {
    console.log(lineCharacter);
}