// Parte I

// Requisito 1
const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

assert.strictEqual(sum(4, 5), 9);
assert.strictEqual(sum(0, 0), 0);
assert.throws(() => {
  sum(4, '5')
});
assert.throws(() => {
  sum(4, '5')
}, /^Error: parameters must be numbers$/);

// Requisito 2
const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

assert.strictEqual(typeof myRemove, 'function');
assert.deepStrictEqual(myRemove([1, 2, 3, 4],3), [1, 2, 4]); 
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4],3), [1, 2, 3, 4]);

const myList = [5, 6, 7, 8];
myRemove(myList, 5)
assert.deepStrictEqual(myList, [5, 6, 7, 8]);

assert.deepStrictEqual(myRemove([1, 2, 3, 4],5), [1, 2, 3, 4]);

// Requisito 3
const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}
 
// implemente seus testes aqui

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4],3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4],3), [1, 2, 3, 4]);

const param = [1, 2, 3, 4];
myRemoveWithoutCopy(param, 1)
assert.strictEqual(param.length, 3);

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4],5), [1, 2, 3, 4]);

// Requisito 4
const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

assert.strictEqual(myFizzBuzz(15), 'fizzbuzz');
assert.strictEqual(myFizzBuzz(3), 'fizz');
assert.strictEqual(myFizzBuzz(5), 'buzz');
assert.strictEqual(myFizzBuzz(7), 7);
assert.strictEqual(myFizzBuzz('number'), false);

// Requisito 5
const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui

assert.deepStrictEqual(obj1, obj2);
assert.notDeepStrictEqual(obj1, obj3);
assert.notDeepStrictEqual(obj2, obj3);

// Parte II

// Requisito 1
const assert = require('assert');
// escreva a função addOne aqui
  const addOne = (array) => {
    const output = [];
    for (let key = 0; key < array.length; key += 1) {
    output.push(array[key] + 1);
  }
  return output
};

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);

// Requisito 2
const assert = require('assert');
// escreva a função wordLengths aqui
  const wordLengths = (array) => {
    const output = [];
    for (let key = 0; key < array.length; key += 1){
    output.push(array[key].length);
    }
    return output
  };

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);

// Requisito 3
const assert = require('assert');
// escreva a função sumAllNumbers aqui
  const sumAllNumbers = (array) => {
    let output = 0
    for (let key = 0; key < array.length; key += 1){
      output += array[key]
    }
    return output
  };

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);

// Requisito 4
const assert = require('assert');
// escreva a função findTheNeedle aqui
const findTheNeedle = (array, word) => {
  let output = -1;
  for (let key = 0; key < array.length; key += 1){
    if (array[key] === word){
      output = key
    }
  }
  return output
};

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);

// Parte III

// Requisito 1
const greetPeopleNew = (people) => {
  const greeting = [];
  for (const person in people) {
    greeting.push(`Hello ${people[person]}`);
  }
  return greeting;
};

const assert = require('assert');
assert.strictEqual(typeof greetPeopleNew, 'function');

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

const output = greetPeopleNew(parameter);
assert.deepStrictEqual(output, result);

// Requisito 2
const assert = require('assert');

const removeVowelsNew = (word) => {
  const characters = word.split('');
  const results = [];
  let counter = 0;

  for (let index = 0; index < characters.length; index += 1) {
    if (
      characters[index] === 'a' ||
      characters[index] === 'o' ||
      characters[index] === 'i' ||
      characters[index] === 'e' ||
      characters[index] === 'u'
    ) {
      counter += 1;
      results.push(counter);
    } else {
      results.push(characters[index]);
    }
  }
  return results.join('');
};

const parameter = 'Dayane';
const result = 'D1y2n3';

assert.strictEqual(typeof removeVowelsNew, 'function');
const output = removeVowelsNew(parameter);
assert.strictEqual(output, result);

// Requisito 3
const assert = require('assert');

const greaterThanTenNew = (array) => {
  const results = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > 10) {
      results.push(array[index]);
    }
  }
  return results;
};

const parameter = [4, 10, 32, 9, 21];
const result = [32, 21];

assert.strictEqual(typeof greaterThanTenNew, 'function');
const output = greaterThanTenNew(parameter);
assert.deepStrictEqual(output, result);

// Requisito 4
const assert = require('assert');

function secondThirdSmallestNew(array) {
    const results = []
    array.sort((item1, item2) => {
        return item1 - item2;
    });
    results.push(array[1], array[2]);
    return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

assert.strictEqual(typeof secondThirdSmallestNew, 'function');
const output = secondThirdSmallestNew(parameter);
assert.deepStrictEqual(output, result);