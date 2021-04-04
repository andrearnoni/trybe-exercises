//Parte 1 

// Requisito 1

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

// Requisito 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const sortOddAndEvens = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;

  return oddsAndEvens  
}
const sortedArray = sortOddAndEvens()
console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente !`);

// Parte 2

// Requisito 1
const factorial = number => {
  let result = 1
  for (let index = 2; index <= number; index += 1) {
      result *= index
  }
  return result
}
console.log(factorial(2))

// Requisito 2
const longestWord = text => {
  let wordArray = text.split(' ');
  let maxLength = 0
  let result = ''

  for(let key of wordArray) {
    if (key.length > maxLength) {
      maxLength = key.length
      result = key
    }
  }
  return result
}
console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")) // retorna 'aconteceu'

// Requisito 3
const btn = document.querySelector('.eventBtn');
let counting = document.querySelector('.numOfClicks');
let clickCount = 0;

btn.addEventListener('click', () => {
  clickCount += 1
  counting.value = clickCount
})

// Requisito 4
const array = ["Android", "iOS", "Architecture", "Teach", "Run"]

function buildSkillsPhrase (paramOne) {
    const fun1 = paramInner => (
      `Tryber ${paramInner} aqui!

      Tudo bem?`
    )

    let result = `${fun1(paramOne)}

    Minhas cinco principais habilidades são:`

    array.forEach((skill, index) =>
    result = `${result}

    - ${skill}`)

    result = `
{result}

    #goTrybe
    `

    return result
}

console.log(buildSkillsPhrase("Lucas"))