// Requisito 1

const newEmployees = (employeeGenerator) => {
  const employees = {
    id1: employeeGenerator('Pedro Guerra'),// Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: employeeGenerator('Luiza Drumond'),// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: employeeGenerator('Carla Paiva')// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
};

const employeeGenerator = (nomeCompleto) => {
const email = nomeCompleto.toLowerCase().split(' ').join('_');
return {nomeCompleto, email:`${email}@betrybe.com`}
}

console.log(newEmployees(employeeGenerator))

// Requisito 2

const numberChecker = (myNumber, number) => myNumber === number;

const lotteryResult = (myNumber, numberChecker) => {
  const number = Math.floor((Math.random() * 5) + 1);

  return numberChecker(myNumber, number) ? 'Lucky day, you won!' : 'Try Again!';
};

console.log(lotteryResult(2, numberChecker));

// Requisito 3

const CORRECT_ANSWER = 'higher order function';
const USER_ANSWER = 'HIGHER ORDER FUNCTION';

const checkAnswer2 = (correctAnswer) => (userAnswer) => correctAnswer === userAnswer.toLowerCase() ? `Legal, resposta correta` : `Resposta errada`;

// 1º forma de resposta (+fácil)
console.log(checkAnswer2(CORRECT_ANSWER)(USER_ANSWER));

// 2º forma de reposta
const correct = checkAnswer2(CORRECT_ANSWER)
const validation = correct(USER_ANSWER)

console.log(validation)

// Requisito 4

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'N.A', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const repeat = (rightAnswers, studentAnswers, action) => {
  let contador = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const actionReturn = action(rightAnswers[index], studentAnswers[index]);
    contador += actionReturn;
  }
  return `Resultado final: ${contador} corretas`;
};

console.log(repeat(RIGHT_ANSWERS, STUDENT_ANSWERS, (rAnswer, uAnswer) => {
  if (rAnswer === uAnswer) {
    return 1;
  } if (uAnswer === 'N.A') {
    return 0;
  }
    return -0.5;
}));