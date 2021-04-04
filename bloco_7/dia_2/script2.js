// Parte II

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Requisito 1
const addNewKey = (obj, key, value) => {
  obj[key] = value;
};

addNewKey(lesson2, 'turno', 'noite');

// Requisito 2
const listKeys = (obj) =>  Object.keys(obj);
console.log(listKeys(lesson1));

// Requisito 3
const sizeObj = (obj) =>  Object.keys(obj).length;
console.log(sizeObj(lesson1));

// Requisito 4
const listValues = (obj) =>  Object.values(obj);
console.log(listValues(lesson1));

// Requisito 5
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

// Requisito 6
const getNumberOfStudents = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (index in array) {
    total += obj[array[index]].numeroEstudantes;
  }
  return total;
};
console.log(getNumberOfStudents(allLessons));

// Requisito 7
const getValueByNumber = (obj,number) => Object.values(obj)[number];
console.log(getValueByNumber);

// Requisito 8
const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let index in arr) {
    if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
  }
  return isEqual;
};
console.log(verifyPair(lesson2,'professor','Carlos'));
