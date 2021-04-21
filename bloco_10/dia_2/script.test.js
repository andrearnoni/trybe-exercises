const { uppercase, getUserName } = require('./script')

//Teste requisito 1
test('transform the letters in a word in uppercase letters', (done) => {
  uppercase('dog', (transformedWord) => {
    expect(transformedWord).toBe('DOG');
    done()
  });
})

//Teste requisito 2
describe('get the name of a user by id', () => {
  it('tests if the id of a user is found', () => {
    expect.assertions(1);
    return getUserName(4).then(userName => {
      expect(userName).toEqual('Mark')
    });
  });

  it('tests in case of the id is not found', () => {
    expect.assertions(1);
    return getUserName(6).catch(error => {
      expect(error).toEqual({ error: 'User with 6 not found.' })
    });
  });
});

//Teste requisito 3
describe('get the name of a user by id (using the async/await)', () => {
  it('in resolve case', async () => {
    const userById = await getUserName(4);
    expect(userById).toEqual('Mark');
  });

  it('in reject case', async () => {
    try {
      await getUserName(6)
    } catch (error) {
      expect(error).toEqual({ error: 'User with 6 not found.' })
    }
  });
});