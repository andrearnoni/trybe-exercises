const { sum, myRemove, myRemoveWithoutCopy, myFizzBuzz } = require('./script')

//Parte I

// Função sum
describe('sum function', () => {
  it('usando como parâmetros (4, 5) o resultado é 9', () => {
    expect(sum(4, 5)).toEqual(9);
  });

  it('usando como parâmetros (0, 0) o resultado é 0', () => {
    expect(sum(0, 0)).toEqual(0);
  });

  it('a função lança um erro quando algum dos parâmetros é uma string', () => {
    expect(() => { sum(4, "5") }).toThrow();
  });

  it('verifica se a msg de retorno do erro é "parameters must be numbers"', () => {
    expect(() => { sum(4, "5") }).toThrow("parameters must be numbers");
  });
});

//Função myRemove
describe('newArray function', () => {
  it('verifica se a função com os parâmetros ([1, 2, 3, 4], 3) retorna um novo array sem o item 3', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('verifica se a função com os parâmetros ([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('verifica se o array passado por parâmetro não sofreu alterações', () => {
    const myList = [5, 6, 7, 8];
    expect(myList).toEqual([5, 6, 7, 8]);
  }); 
  
  it('verifica se a função com parâmetros ([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

//Função myRemoveWithoutCopy
describe('myRemoveWithoutCopy function', () => {
  it('verifica se a função com parâmetros ([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('verifica se a função com parâmetros ([1, 2, 3, 4], 3) não retorna [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
});

//Função myFizzBuzz
describe('myFizzBuzz function', () => {
  it('verifica se a função com um parâmetro de numero divisível por 3 e 5 retorna o esperado', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
  });

  it('verifica se a função com um parâmetro de numero divisível por 3 retorna o esperado', () => {
    expect(myFizzBuzz(12)).toEqual('fizz');
  });

  it('verifica se a função com um parâmetro de numero divisível por 5 retorna o esperado', () => {
    expect(myFizzBuzz(10)).toEqual('buzz');
  });

  it('verifica se a função com um parâmetro de numero não divisível por 3 e 5 retorna o esperado', () => {
    expect(myFizzBuzz(8)).toEqual(8);
  });

  it('verifica se a função com um parâmetro que não é um numero retorna o esperado', () => {
    expect(myFizzBuzz("15")).toEqual(false);
  });
});